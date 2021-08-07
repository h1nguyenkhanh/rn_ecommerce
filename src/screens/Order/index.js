/* eslint-disable react-native/no-inline-styles */
import {colors} from 'assets/styles';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {formatMoney} from 'utils';
import Icons from 'react-native-vector-icons/AntDesign';
import {deleteCart, setQuantity} from 'redux/actions/cartAction';
import {useNavigation} from '@react-navigation/native';

const Order = () => {
  const {products, totalPrice} = useSelector(store => store.cart);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const renderProductItem = ({item: {data, quantity}}) => {
    const handleChangeQuantity = (productId, newQuantity) => {
      if (newQuantity < 1) {
        return;
      }
      dispatch(setQuantity(productId, parseFloat(newQuantity)));
    };

    const handleOnDelete = () => {
      Alert.alert(
        '',
        `Bạn có chắc chắn muốn xóa "${data.productName}" khỏi giỏ hàng không?`,
        [
          {
            text: 'Hủy',
            onPress: () => console.log('Cancel Pressed'),
          },
          {
            text: 'Xóa',
            onPress: () => {
              dispatch(deleteCart(data.id));
            },
          },
        ],
      );
    };

    return (
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 5,
          marginBottom: 15,
          shadowColor: '#000',
          overflow: 'hidden',
          padding: 5,
          paddingVertical: 15,
          backgroundColor: colors.white1,
          borderRadius: 15,
          marginTop: 5,
          paddingRight: 10,
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
          elevation: 4,
        }}>
        <Image
          source={{
            uri: data.productImage,
          }}
          style={{width: 70, height: 70, marginHorizontal: 5}}
        />
        <View style={{flex: 1, paddingHorizontal: 5}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: colors.black2,
                }}>
                {data.productName}
              </Text>
              <Text style={{fontSize: 14, color: '#777'}}>
                {data.description}
              </Text>
            </View>
            <TouchableOpacity onPress={handleOnDelete}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: colors.black2,
                }}>
                x
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              justifyContent: 'space-between',
            }}>
            <Text
              style={{fontSize: 18, color: colors.green1, fontWeight: 'bold'}}>
              <Text>{formatMoney(data.price * quantity)}</Text>
              <Text> VNĐ</Text>
            </Text>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                onPress={() => handleChangeQuantity(data.id, quantity - 1)}>
                <Icons
                  name="minuscircleo"
                  size={25}
                  style={{color: colors.green1}}
                />
              </TouchableOpacity>
              <Text
                style={{
                  marginHorizontal: 10,
                  width: 20,
                  textAlign: 'center',
                  fontSize: 16,
                }}>
                {quantity}
              </Text>
              <TouchableOpacity
                onPress={() => handleChangeQuantity(data.id, quantity + 1)}>
                <Icons
                  name="pluscircle"
                  size={25}
                  style={{color: colors.green1}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        padding: 15,
        backgroundColor: colors.white1,
        flexGrow: 1,
      }}>
      <Text
        style={{
          fontSize: 25,
          fontFamily: 'sans-serif-medium',
          fontWeight: 'bold',
          color: colors.black2,
          marginBottom: 20,
          marginTop: 10,
        }}>
        Giỏ hàng
      </Text>
      {products.length > 0 ? (
        <>
          <FlatList
            data={products}
            renderItem={renderProductItem}
            style={{
              padding: 5,
              marginBottom: 10,
              height: 260,
              flexGrow: 0,
            }}
            keyExtractor={(item, index) => index}
            refreshing={true}
            persistentScrollbar
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: colors.black2,
              borderTopWidth: 2,
              borderTopColor: colors.black2,
              paddingTop: 10,
            }}>
            Mã giảm giá
          </Text>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <TextInput
              style={{
                borderColor: colors.black2,
                borderStyle: 'dashed',
                borderWidth: 2,
                borderRadius: 1,
                flex: 1,
                marginRight: 10,
                paddingHorizontal: 10,
              }}
            />
            <TouchableOpacity
              style={{
                backgroundColor: colors.green1,
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 10,
              }}>
              <Text style={{color: '#fff', fontSize: 16}}>Áp dụng</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 30,
            }}>
            <Text
              style={{fontSize: 18, fontWeight: 'bold', color: colors.black2}}>
              Tổng tiền (chưa thuế):
            </Text>
            <Text
              style={{fontSize: 18, fontWeight: 'bold', color: colors.green1}}>
              {formatMoney(totalPrice)} VNĐ
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text
              style={{fontSize: 18, fontWeight: 'bold', color: colors.black2}}>
              Thuế (10%):
            </Text>
            <Text
              style={{fontSize: 18, fontWeight: 'bold', color: colors.green1}}>
              {formatMoney((totalPrice * 10) / 100)} VNĐ
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text
              style={{fontSize: 18, fontWeight: 'bold', color: colors.black2}}>
              Phí vận chuyển:
            </Text>
            <Text
              style={{fontSize: 18, fontWeight: 'bold', color: colors.green1}}>
              {formatMoney(30000)} VNĐ
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text
              style={{fontSize: 18, fontWeight: 'bold', color: colors.black2}}>
              {`Giảm giá (5%):`}
            </Text>
            <Text
              style={{fontSize: 18, fontWeight: 'bold', color: colors.green1}}>
              -{formatMoney((totalPrice * 5) / 100)} VNĐ
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text
              style={{fontSize: 25, fontWeight: 'bold', color: colors.black2}}>
              Tổng cộng:
            </Text>
            <Text
              style={{fontSize: 25, fontWeight: 'bold', color: colors.green1}}>
              {formatMoney(
                totalPrice + (totalPrice * 10) / 100 - (totalPrice * 5) / 100,
              )}{' '}
              VNĐ
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: colors.green1,
              paddingVertical: 15,
              marginTop: 30,
            }}
            onPress={() => navigation.navigate('Checkout')}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                fontWeight: 'bold',
                color: '#fff',
              }}>
              Thanh toán
            </Text>
          </TouchableOpacity>
        </>
      ) : (
        <View style={{marginTop: 20}}>
          <Text style={{color: colors.black2}}>
            Không có sản phẩm nào trong giỏ hàng
          </Text>
        </View>
      )}
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({});
