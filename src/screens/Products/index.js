/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {colors, radius} from '../../assets/styles';
import {getProductsRequest} from '../../redux/actions/productsAction';
import {formatMoney} from '../../utils';
import Stars from '../../components/Stars';
import {useNavigation} from '@react-navigation/native';

const height = Dimensions.get('window').height;

const Products = () => {
  const [searchValue, setSearchValue] = useState('');
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const productsData = useSelector(state => state.products.data);

  useEffect(() => {
    dispatch(getProductsRequest());
  }, [dispatch]);

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
          <TouchableOpacity
            onPress={() => navigation.navigate('ProductDetail', item)}>
            <Text style={styles.itemBottomText}>{item.name}</Text>
          </TouchableOpacity>

          <Stars starNumber={item.rating}></Stars>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text style={styles.price}>{formatMoney(item.price) + ' VNĐ'}</Text>
            <TouchableOpacity
              style={{
                borderRadius: 999,
                backgroundColor: colors.green1,
                padding: 10,
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
        <TouchableOpacity style={styles.headerFilter}>
          <Ionicons name="options" size={30} style={styles.filterIcons} />
        </TouchableOpacity>
        <View style={styles.headerSearch}>
          <TextInput
            style={styles.searchInput}
            onChangeText={setSearchValue}
            value={searchValue}
            placeholder="Tìm kiếm"
          />
          <TouchableOpacity>
            <Ionicons name="search" size={27} style={styles.icons} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        <FlatList
          data={productsData}
          renderItem={renderProductItem}
          numColumns={2}
          style={{padding: 5, flex: 1}}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            paddingHorizontal: 5,
            paddingBottom: 10,
          }}
        />
      </View>
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
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
  },
  itemBottomText: {
    color: colors.black2,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
