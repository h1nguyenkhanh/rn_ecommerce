/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useMemo, useRef, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  ActivityIndicator,
  DrawerLayoutAndroid,
  Button,
  Platform,
  ScrollView,
} from 'react-native';
import {CheckBox, Rating} from 'react-native-elements';
import {Radio} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {colors, radius} from '../../assets/styles';
import {getProductsRequest} from '../../redux/actions/productsAction';
import {formatMoney, removeVnMark} from '../../utils';
import Stars from '../../components/Stars';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import Modal from 'react-native-modal';
import ExtraDimensions from 'react-native-extra-dimensions-android';
import {addCart} from 'redux/actions/cartAction';

const height = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const deviceHeight =
  Platform.OS === 'ios'
    ? Dimensions.get('window').height
    : ExtraDimensions.get('REAL_WINDOW_HEIGHT');

const initialFilter = {
  params: {
    categories: {
      label: 'categoryId',
      operator: 'in',
      value: [],
    },
    rating: {
      label: 'rating',
      operator: '==',
      value: 0,
    },
    fromPrice: {
      label: 'price',
      operator: '>=',
      value: 0,
    },
    toPrice: {
      label: 'price',
      operator: '<=',
      value: 0,
    },
  },
  sort: {
    label: 'price',
    value: '',
  },
};

const Products = () => {
  const [searchValue, setSearchValue] = useState('');
  const navigation = useNavigation();
  const [productsData, setProductsData] = useState([]);
  const lastProduct = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const categoriesData = useSelector(state => state.categories.data);
  const [checkboxValue, setCheckboxValue] = useState({});
  const [itemSelected, setItemSelected] = useState(0);
  const [priceFrom, setPriceFrom] = useState(null);
  const [priceTo, setPriceTo] = useState(null);
  const [filter, setFilter] = useState(initialFilter);
  const [sortPrice, setSortPrice] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    async function getFirst() {
      let query = firestore().collection('products');
      const {params, sort} = filter;

      for (let key in params) {
        const {label, operator, value} = params[key];
        if (value && value?.length !== 0) {
          query = query.where(label, operator, value);
        }
      }

      if (sort.value) {
        query = query.orderBy(sort.label, sort.value);
      }

      const firstProducts = query.limit(8);
      const firstSnapshot = await firstProducts.get();
      lastProduct.current = firstSnapshot.docs[firstSnapshot.docs.length - 1];
      let data = [];
      firstSnapshot.forEach(documentSnapshot => {
        data.push({
          id: documentSnapshot.id,
          ...documentSnapshot.data(),
        });
      });
      setProductsData(data);
    }

    getFirst();
  }, [filter]);

  async function getNextData() {
    if (!lastProduct.current || searchValue) {
      return;
    }
    setIsLoading(true);
    let query = firestore().collection('products');
    const {params, sort} = filter;

    for (let key in params) {
      const {label, operator, value} = params[key];
      if (value && value?.length !== 0) {
        query = query.where(label, operator, value);
      }
    }

    if (sort.value) {
      query = query.orderBy(sort.label, sort.value);
    }

    const nextProducts = query.startAfter(lastProduct.current).limit(4);
    const nextSnapshot = await nextProducts.get();
    lastProduct.current = nextSnapshot.docs[nextSnapshot.docs.length - 1];
    let data = [];
    nextSnapshot.forEach(documentSnapshot => {
      data.push({
        id: documentSnapshot.id,
        ...documentSnapshot.data(),
      });
    });
    setProductsData(state => {
      return [...state, ...data];
    });
    setIsLoading(false);
  }

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const onCheck = value => {
    setCheckboxValue(state => {
      const newCheckboxValue = {
        ...state,
      };

      newCheckboxValue[value] = !newCheckboxValue[value];

      return newCheckboxValue;
    });
  };

  const onFilter = () => {
    setModalVisible(false);
    setSearchValue('');
    const categoriesFilter = [];
    for (let key in checkboxValue) {
      if (checkboxValue[key]) {
        categoriesFilter.push(key);
      }
    }

    setFilter(state => {
      const newState = {
        sort: {
          label: 'price',
          value: sortPrice,
        },
        params: {
          categories: {
            ...state.params.categories,
            value: categoriesFilter,
          },
          rating: {
            ...state.params.rating,
            value: itemSelected,
          },
          fromPrice: {
            ...state.params.fromPrice,
            value: parseFloat(priceFrom),
          },
          toPrice: {
            ...state.params.toPrice,
            value: parseFloat(priceTo),
          },
        },
      };

      if (priceFrom || priceTo) {
        newState.sort = {
          label: 'price',
          value: 'asc',
        };
      }
      return newState;
    });
  };

  const onReset = () => {
    setCheckboxValue({});
    setItemSelected(0);
    setPriceFrom(null);
    setPriceTo(null);
    setModalVisible(false);
    setSearchValue('');
    setSortPrice('');
    setFilter({...initialFilter});
  };

  const handleOnSearch = async () => {
    const querySnapshot = await firestore()
      .collection('products')
      .where('keywords', 'array-contains', removeVnMark(searchValue))
      .get();
    let data = [];
    querySnapshot.forEach(documentSnapshot => {
      data.push({
        id: documentSnapshot.id,
        ...documentSnapshot.data(),
      });
    });
    setProductsData(data);
    setCheckboxValue({});
    setItemSelected(0);
    setPriceFrom(null);
    setSortPrice('');
    setPriceTo(null);
  };

  const handleOnSearchChange = value => {
    if (value === '') {
      setFilter({...initialFilter});
    }
    setSearchValue(value);
  };

  const handleOnAddCart = item => {
    dispatch(addCart(item));
  };

  const renderProductItem = ({item}) => {
    return (
      <View style={styles.productItem}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ProductDetail', item)}>
          <Image
            source={{
              uri: item.productImage,
            }}
            style={styles.productImage}
          />
        </TouchableOpacity>
        <View style={styles.itemBottom}>
          <Stars starNumber={item.rating}></Stars>
          <TouchableOpacity
            style={{flex: 1}}
            onPress={() => navigation.navigate('ProductDetail', item)}>
            <Text style={styles.itemBottomText}>{item.productName}</Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text style={styles.price}>{formatMoney(item.price) + ' VNĐ'}</Text>
            <TouchableOpacity
              onPress={() => handleOnAddCart(item)}
              style={{
                borderRadius: 999,
                backgroundColor: colors.green1,
                padding: 7,
              }}>
              <MaterialIcons
                name="shopping-cart"
                size={20}
                style={{color: '#fff'}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh sách sản phẩm</Text>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerFilter} onPress={toggleModal}>
          <Ionicons name="options" size={30} style={styles.filterIcons} />
        </TouchableOpacity>
        <View style={styles.headerSearch}>
          <TextInput
            style={styles.searchInput}
            onChangeText={handleOnSearchChange}
            value={searchValue}
            placeholder="Tìm kiếm"
          />
          <TouchableOpacity onPress={handleOnSearch}>
            <Ionicons name="search" size={27} style={styles.icons} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        {productsData.length > 0 ? (
          <FlatList
            data={productsData}
            renderItem={renderProductItem}
            numColumns={2}
            style={{padding: 5, flex: 1, marginBottom: 15}}
            onEndReachedThreshold={0}
            keyExtractor={(item, index) => item.id + index}
            columnWrapperStyle={{
              justifyContent: 'space-between',
              paddingHorizontal: 5,
              paddingBottom: 10,
            }}
            onEndReached={getNextData}
            refreshing={true}
            ListFooterComponent={() =>
              isLoading ? (
                <ActivityIndicator size="large" color={colors.green1} />
              ) : null
            }
          />
        ) : (
          <View style={{marginTop: 20}}>
            <Text style={{color: colors.black2}}>
              Không tìm thấy sản phẩm nào
            </Text>
          </View>
        )}
      </View>
      <Modal
        isVisible={isModalVisible}
        deviceWidth={deviceWidth}
        deviceHeight={deviceHeight}>
        <ScrollView
          style={{
            flex: 1,
            backgroundColor: '#fff',
            padding: 20,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <TouchableOpacity
              style={{paddingHorizontal: 5}}
              onPress={toggleModal}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>X</Text>
            </TouchableOpacity>
          </View>
          <Text style={[styles.filterText, {marginBottom: 10}]}>
            Danh mục sản phẩm
          </Text>
          {categoriesData.map(item => {
            return (
              <CheckBox
                title={item.title}
                checked={checkboxValue[item.id]}
                key={item.id}
                onPress={() => onCheck(item.id)}
              />
            );
          })}
          <Text style={[styles.filterText, {marginBottom: 10, marginTop: 20}]}>
            Đánh giá
          </Text>
          {[5, 4, 3, 2, 1].map(item => {
            return (
              <CheckBox
                title={
                  <Rating
                    ratingCount={5}
                    imageSize={20}
                    startingValue={item}
                    readonly
                  />
                }
                checked={itemSelected === item}
                key={item}
                onPress={() => setItemSelected(item)}
              />
            );
          })}
          <Text style={[styles.filterText, {marginBottom: 10, marginTop: 20}]}>
            Khoảng giá
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text
              style={{fontSize: 16, fontWeight: 'bold', color: colors.black2}}>
              Từ:{' '}
            </Text>
            <TextInput
              onChangeText={setPriceFrom}
              value={priceFrom}
              style={{
                borderWidth: 2,
                borderColor: colors.black2,
                paddingVertical: 5,
                paddingHorizontal: 10,
                flex: 1,
                borderRadius: 15,
                marginLeft: 10,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text
              style={{fontSize: 16, fontWeight: 'bold', color: colors.black2}}>
              Đến:{' '}
            </Text>
            <TextInput
              onChangeText={setPriceTo}
              value={priceTo}
              style={{
                borderWidth: 2,
                borderColor: colors.black2,
                paddingVertical: 5,
                paddingHorizontal: 10,
                flex: 1,
                borderRadius: 15,
              }}
            />
          </View>
          <Text style={[styles.filterText, {marginBottom: 10, marginTop: 20}]}>
            Sắp xếp theo
          </Text>
          <CheckBox
            title={'Giá tăng dần'}
            checked={sortPrice === 'asc'}
            onPress={() => setSortPrice('asc')}
          />
          <CheckBox
            title={'Giá giảm dần'}
            checked={sortPrice === 'desc'}
            onPress={() => setSortPrice('desc')}
          />
          <TouchableOpacity
            onPress={onFilter}
            style={{
              backgroundColor: colors.green1,
              marginTop: 20,
              justifyContent: 'center',
              flexDirection: 'row',
              paddingVertical: 10,
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 25,
                fontWeight: 'bold',
              }}>
              Lọc
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onReset}
            style={{
              marginBottom: 50,
              marginTop: 20,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                color: colors.green1,
                fontSize: 18,
              }}>
              Đặt lại
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </Modal>
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  filterText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black2,
  },
  loadingWrapper: {
    backgroundColor: 'red',
  },
  container: {
    padding: 15,
    backgroundColor: colors.white1,
    flexGrow: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: 'sans-serif-medium',
    fontWeight: 'bold',
    color: colors.black2,
    marginBottom: 20,
    marginTop: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerFilter: {
    backgroundColor: colors.green1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderRadius: radius.medium,
    marginRight: 10,
    borderColor: 'rgba(0,0,0,0.1)',
    borderWidth: 1,
    color: colors.white1,
  },
  headerSearch: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white1,
    borderRadius: radius.medium,
    paddingRight: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  searchInput: {
    flex: 1,
    paddingRight: 10,
    paddingLeft: 15,
  },
  icons: {
    color: colors.green1,
  },
  filterIcons: {
    color: colors.white1,
  },
  body: {
    height: height - 235,
    marginTop: 10,
  },
  productItem: {
    width: '48%',
    shadowColor: '#000',
    overflow: 'hidden',
    padding: 5,
    backgroundColor: colors.white1,
    borderRadius: radius.medium,
    marginTop: 5,
    paddingRight: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  productImage: {
    width: '100%',
    height: 145,
    resizeMode: 'stretch',
  },
  itemBottom: {
    padding: 5,
    flex: 1,
  },
  itemBottomText: {
    color: colors.green1,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontWeight: 'bold',
    color: colors.black2,
    fontSize: 16,
  },
});
