/* eslint-disable react-native/no-inline-styles */
import {colors} from 'assets/styles';
import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  Platform,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import ExtraDimensions from 'react-native-extra-dimensions-android';
import {useForm, Controller} from 'react-hook-form';
import {emailRegex, phoneNumberRegex} from '../../utils';
import {CheckBox} from 'react-native-elements/dist/checkbox/CheckBox';

const deviceHeight =
  Platform.OS === 'ios'
    ? Dimensions.get('window').height
    : ExtraDimensions.get('REAL_WINDOW_HEIGHT');

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('payment on delivery');
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: 'onTouched'});
  const onSubmit = data => console.log(data);

  return (
    <View
      style={{
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
      }}>
      <View>
        <Text
          style={{
            fontSize: 25,
            fontFamily: 'sans-serif-medium',
            fontWeight: 'bold',
            color: colors.black2,
            marginBottom: 20,
            marginTop: 10,
          }}>
          Thanh toán
        </Text>
        <View
          style={{
            backgroundColor: colors.white1,
            borderRadius: 15,
            padding: 15,
            marginHorizontal: 5,
            marginBottom: 5,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,

            elevation: 4,
          }}>
          <View>
            <Text
              style={{
                marginBottom: 5,
                fontSize: 16,
                fontWeight: 'bold',
                color: colors.black2,
              }}>
              Họ và tên
            </Text>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={{
                    borderWidth: 2,
                    borderColor: colors.black2,
                    paddingHorizontal: 15,
                    paddingVertical: 5,
                    color: colors.black2,
                  }}
                />
              )}
              name="name"
              rules={{
                required: {
                  value: true,
                  message: 'Trường trống',
                },
              }}
            />
            {errors.name && (
              <Text style={{color: 'red', marginTop: 5}}>
                {errors.name.message}
              </Text>
            )}
          </View>
          <View style={{marginTop: 15}}>
            <Text
              style={{
                marginBottom: 5,
                fontSize: 16,
                fontWeight: 'bold',
                color: colors.black2,
              }}>
              Email
            </Text>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={{
                    borderWidth: 2,
                    borderColor: colors.black2,
                    paddingHorizontal: 15,
                    paddingVertical: 5,
                    color: colors.black2,
                  }}
                />
              )}
              name="email"
              rules={{
                required: {
                  value: true,
                  message: 'Trường trống',
                },
                pattern: {
                  value: emailRegex,
                  message: 'Email không hợp lệ!',
                },
              }}
            />
            {errors.email && (
              <Text style={{color: 'red', marginTop: 5}}>
                {errors.email.message}
              </Text>
            )}
          </View>
          <View style={{marginTop: 15}}>
            <Text
              style={{
                marginBottom: 5,
                fontSize: 16,
                fontWeight: 'bold',
                color: colors.black2,
              }}>
              Số điện thoại
            </Text>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={{
                    borderWidth: 2,
                    borderColor: colors.black2,
                    paddingHorizontal: 15,
                    paddingVertical: 5,
                    color: colors.black2,
                  }}
                />
              )}
              name="phoneNumber"
              rules={{
                required: {
                  value: true,
                  message: 'Trường trống',
                },
                pattern: {
                  value: phoneNumberRegex,
                  message: 'Số điện thoại không hợp lệ!',
                },
              }}
            />
            {errors.phoneNumber && (
              <Text style={{color: 'red', marginTop: 5}}>
                {errors.phoneNumber.message}
              </Text>
            )}
          </View>
          <View style={{marginTop: 15}}>
            <Text
              style={{
                marginBottom: 5,
                fontSize: 16,
                fontWeight: 'bold',
                color: colors.black2,
              }}>
              Địa chỉ
            </Text>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={{
                    borderWidth: 2,
                    borderColor: colors.black2,
                    paddingHorizontal: 15,
                    paddingVertical: 5,
                    color: colors.black2,
                  }}
                />
              )}
              name="address"
              rules={{
                required: {
                  value: true,
                  message: 'Trường trống',
                },
              }}
            />
            {errors.address && (
              <Text style={{color: 'red', marginTop: 5}}>
                {errors.address.message}
              </Text>
            )}
          </View>
          <View style={{marginTop: 15}}>
            <Text
              style={{
                marginBottom: 5,
                fontSize: 16,
                fontWeight: 'bold',
                color: colors.black2,
              }}>
              Hình thức thanh toán
            </Text>
            <CheckBox
              title={'Thanh toán khi nhận hàng'}
              checked={paymentMethod === 'payment on delivery'}
              onPress={() => setPaymentMethod('payment on delivery')}
            />
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: colors.green1,
              paddingVertical: 15,
              marginTop: 30,
              marginBottom: 30,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                fontWeight: 'bold',
                color: '#fff',
              }}>
              Đặt hàng
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Checkout;
