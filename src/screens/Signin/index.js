/* eslint-disable react-native/no-inline-styles */
import {colors} from 'assets/styles';
import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import {useForm, Controller} from 'react-hook-form';
import {emailRegex} from '../../utils';
import {useNavigation} from '@react-navigation/native';

const Signin = () => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: 'onTouched'});
  return (
    <View style={{flex: 1, backgroundColor: '#fff', alignItems: 'center'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 60,
        }}>
        <Icons name={'envira'} size={45} style={{color: colors.green1}} />
        <Text
          style={{
            fontSize: 60,
            fontWeight: 'bold',
            color: colors.green1,
            marginLeft: 10,
          }}>
          Fresh
        </Text>
      </View>
      <View
        style={{
          borderColor: '#ddd',
          borderRadius: 5,
          borderWidth: 1,
          backgroundColor: '#fff',
          paddingVertical: 50,
          paddingHorizontal: 20,
          width: '90%',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,

          elevation: 4,
        }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: colors.black2,
            textAlign: 'center',
          }}>
          Đăng nhập
        </Text>
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
                  borderRadius: 20,
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
            Mật khẩu
          </Text>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry={true}
                style={{
                  borderWidth: 2,
                  borderColor: colors.black2,
                  paddingHorizontal: 15,
                  paddingVertical: 5,
                  color: colors.black2,
                  borderRadius: 20,
                }}
              />
            )}
            name="password"
            rules={{
              required: {
                value: true,
                message: 'Trường trống',
              },
            }}
          />
          {errors.password && (
            <Text style={{color: 'red', marginTop: 5}}>
              {errors.password.message}
            </Text>
          )}
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: colors.green1,
            paddingVertical: 15,
            marginTop: 30,
            marginBottom: 30,
            borderRadius: 30,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              fontWeight: 'bold',
              color: '#fff',
            }}>
            Đăng nhập
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              lineHeight: 30,
              justifyContent: 'center',
              fontSize: 16,
              color: colors.black2,
              fontWeight: 'bold',
            }}>
            Bạn chưa có tài khoản?{' '}
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Signup');
            }}>
            <Text
              style={{
                lineHeight: 30,
                fontSize: 16,
                fontWeight: 'bold',
                color: 'rgb(81, 136, 255)',
              }}>
              Đăng ký
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Signin;
