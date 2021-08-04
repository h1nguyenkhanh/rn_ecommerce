import storage from '@react-native-firebase/storage';
import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';
import {colors, radius, common} from '../../assets/styles';
import {launchImageLibrary} from 'react-native-image-picker';
import {useForm, Controller} from 'react-hook-form';
import {useSelector, useDispatch} from 'react-redux';
import {createProductRequest} from '../../redux/actions/productsAction';
import {Picker} from '@react-native-picker/picker';

const height = Dimensions.get('window').height;

const Admin = () => {
  const dispatch = useDispatch();
  const categoriesData = useSelector(state => state.categories.data);
  const [imageUrl, setImageUrl] = useState(null);
  const [imageError, setImageError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedUnit, setSelectedUnit] = useState();
  const [categoryError, setCategoryError] = useState(null);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const unitData = [
    {
      title: 'Sản phẩm',
      value: 'sp',
    },
    {
      title: 'g',
      value: 'g',
    },
    {
      title: 'kg',
      value: 'kg',
    },
    {
      title: 'Củ',
      value: 'cu',
    },
    {
      title: 'Quả',
      value: 'qua',
    },
  ];
  function uploadImage() {
    launchImageLibrary({mediaType: 'photo'}, ({assets}) => {
      if (!assets) {
        return;
      }
      const imageInfo = assets[0];
      const reference = storage().ref(`images/${imageInfo.fileName}`);
      const task = reference.putFile(imageInfo.uri);

      task.on('state_changed', taskSnapshot => {
        console.log(
          'progress: ' +
            (taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) * 100,
        );
        console.log(
          `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
        );
      });

      task
        .then(() => {
          return reference.getDownloadURL();
        })
        .then(data => {
          setImageUrl(data);
        });
    });
  }

  function handleOnSubmit(formData) {
    if (!imageUrl) {
      setImageError(true);
      return;
    }
    if (!selectedCategory) {
      setCategoryError(true);
      return;
    }
    const newProductData = {
      ...formData,
      image: imageUrl,
      categoryId: selectedCategory,
      unit: selectedUnit,
      rating: Math.floor(Math.random() * (5 - 3 + 1)) + 3,
    };
    dispatch(createProductRequest(newProductData));
  }

  return (
    <ScrollView style={[styles.container, {flex: 1}]}>
      <Text style={styles.title}>Admin</Text>
      <View>
        <Text style={styles.label}>Tên sản phẩm</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.inputText}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="name"
          defaultValue=""
        />
        {errors.name && <Text style={styles.error}>Không được để trống</Text>}
        <Text style={styles.label}>Mô tả sản phẩm</Text>

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.inputText}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="description"
          defaultValue=""
        />
        {errors.description && (
          <Text style={styles.error}>Không được để trống</Text>
        )}
        <View style={styles.wrapper}>
          <View style={styles.box}>
            <Text style={styles.label}>Đơn giá</Text>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.inputText}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="price"
              defaultValue=""
            />
          </View>
          <View style={styles.box}>
            <Text style={styles.label}>Đơn vị</Text>
            <View style={styles.picker}>
              <Picker
                selectedValue={selectedUnit}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedUnit(itemValue)
                }>
                {unitData.length > 0 &&
                  unitData.map((item, index) => {
                    return (
                      <Picker.Item
                        label={item.title}
                        value={item.value}
                        key={item.value}
                        style={{fontSize: 14}}
                      />
                    );
                  })}
              </Picker>
            </View>
          </View>
        </View>
        {errors.price && <Text style={styles.error}>Không được để trống</Text>}
        <Text style={styles.label}>Danh mục sản phẩm</Text>
        <View style={styles.picker}>
          <Picker
            selectedValue={selectedCategory}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedCategory(itemValue)
            }>
            {categoriesData.length > 0 &&
              categoriesData.map((item, index) => {
                return (
                  <Picker.Item
                    label={item.title}
                    value={item.id}
                    key={item.id}
                    style={{fontSize: 14}}
                  />
                );
              })}
          </Picker>
        </View>
        {categoryError && <Text style={styles.error}>Không được để trống</Text>}
        <Text style={styles.label}>Hình ảnh</Text>
        <TouchableOpacity onPress={uploadImage} style={styles.btnWrapper}>
          <Text style={styles.btn}>Chọn ảnh</Text>
        </TouchableOpacity>
        <View style={styles.imagePreview}>
          {imageUrl && <Image source={{uri: imageUrl}} style={styles.image} />}
        </View>
        {imageError && <Text style={styles.error}>Không được để trống</Text>}

        <TouchableOpacity
          onPress={handleSubmit(handleOnSubmit)}
          style={{alignItems: 'center'}}>
          <Text style={styles.submitButton}>Tạo sản phẩm</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Admin;

const styles = StyleSheet.create({
  ...common,
  inputText: {
    borderColor: colors.gray1,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 14,
  },

  label: {
    color: colors.black2,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 5,
  },
  imagePreview: {
    alignItems: 'center',
    borderColor: colors.gray1,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    height: 150,
  },
  image: {
    width: 150,
    height: '100%',
  },
  picker: {
    borderColor: colors.gray1,
    borderWidth: 1,
    height: 40,
    justifyContent: 'center',
  },
  error: {
    color: 'red',
    fontSize: 12,
  },
  btnWrapper: {
    alignItems: 'flex-start',
    marginTop: 10,
    marginBottom: 10,
  },
  btn: {
    backgroundColor: colors.green1,
    color: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: radius.thin,
  },
  submitButton: {
    backgroundColor: colors.green1,
    color: '#fff',
    paddingHorizontal: 50,
    paddingVertical: 15,
    marginTop: 20,
    borderRadius: radius.thin,
    fontWeight: 'bold',
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box: {
    width: '45%',
    alignSelf: 'stretch',
  },
});
