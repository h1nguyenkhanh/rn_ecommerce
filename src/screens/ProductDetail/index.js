/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {colors, radius} from '../../assets/styles';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import {formatMoney} from '../../utils';
import Stars from '../../components/Stars';

const height = Dimensions.get('window').height;

const ProductDetail = ({route}) => {
  const [quantity, setQuantity] = useState('1');
  const data = route.params;

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{height: height - 45}}>
        <ScrollView>
          <View
            style={{
              height: 55,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{fontSize: 25, color: colors.black2, fontWeight: 'bold'}}>
              {data.productName}
            </Text>
          </View>
          <View>
            <Image
              source={{uri: data.productImage}}
              style={{height: 300, marginTop: 20}}></Image>
          </View>
          <View style={{alignItems: 'center'}}>
            <Stars starNumber={data.rating} size="big"></Stars>
          </View>
          <View style={{paddingHorizontal: 20, marginTop: 30}}>
            <Text>{data.description}</Text>
          </View>
          <View style={{paddingHorizontal: 20, marginTop: 30}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              {formatMoney(data.price) + ' VNĐ / ' + data.unit}
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: 20,
              marginTop: 30,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text>Số lượng</Text>
            <TextInput
              value={quantity}
              onChangeText={setQuantity}
              keyboardType="numeric"
              style={{
                marginHorizontal: 10,
                borderWidth: 1,
                borderColor: colors.black2,
                paddingHorizontal: 15,
                paddingVertical: 5,
                width: 100,
                borderRadius: 15,
                textAlign: 'center',
                fontWeight: 'bold',
              }}></TextInput>
          </View>
          <View
            style={{
              paddingHorizontal: 20,
              marginTop: 30,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                paddingVertical: 10,
                paddingHorizontal: 20,
                backgroundColor: colors.green1,
                borderRadius: 5,
                width: '100%',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#fff',
                  fontSize: 15,
                  fontWeight: 'bold',
                }}>
                Mua ngay
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              paddingHorizontal: 20,
              marginTop: 30,
            }}>
            <Text style={{fontSize: 15, fontWeight: 'bold', marginBottom: 10}}>
              Bình luận
            </Text>
            <View
              style={{
                flexDirection: 'row',
                borderBottomWidth: 1,
                borderBottomColor: '#ccc',
                paddingVertical: 10,
              }}>
              <Image
                style={{width: 40, height: 40}}
                source={{
                  uri: 'https://www.seekpng.com/png/full/356-3562377_personal-user.png',
                }}></Image>
              <Text style={{flex: 1, marginLeft: 10}}>
                Sản phẩm rất tuyệt vời ăn rất ngon{' '}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                borderBottomWidth: 1,
                borderBottomColor: '#ccc',
                paddingVertical: 10,
              }}>
              <Image
                style={{width: 40, height: 40}}
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuoovVYEMl5PlyrnrmjPY_0bH_k0RaXYByiMVOWeEhWeG9wxWP2ozVw0Ab51hiQzxErpo&usqp=CAU',
                }}></Image>
              <Text style={{flex: 1, marginLeft: 10}}>
                Sản phẩm rất tuyệt vời ăn rất ngon{' '}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({});
