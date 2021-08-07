/* eslint-disable react-native/no-inline-styles */
import {colors} from 'assets/styles';
import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import {useForm, Controller} from 'react-hook-form';
import {
  emailRegex,
  nameRegex,
  passwordRegex,
  phoneNumberRegex,
} from '../../utils';
import {useNavigation} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';

const Signin = () => {
  const [gender, setGender] = useState(null);
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: 'onTouched'});

  const signup = data => {
    console.log(data);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
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
          Đăng ký
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
              pattern: {
                value: passwordRegex,
                message:
                  'Mật khẩu chứa ít nhất 8 kí tự, bao gồm 1 chữ hoa, 1 chữ thường và 1 số',
              },
            }}
          />
          {errors.password && (
            <Text style={{color: 'red', marginTop: 5}}>
              {errors.password.message}
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
                  borderRadius: 20,
                }}
              />
            )}
            name="name"
            rules={{
              required: {
                value: true,
                message: 'Trường trống',
              },
              pattern: {
                value: nameRegex,
                message: 'Tên không hợp lệ!',
              },
            }}
          />
          {errors.name && (
            <Text style={{color: 'red', marginTop: 5}}>
              {errors.name.message}
            </Text>
          )}
        </View>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <View style={{flex: 1}}>
            <Text
              style={{
                marginBottom: 5,
                fontSize: 16,
                fontWeight: 'bold',
                color: colors.black2,
              }}>
              Giới tính
            </Text>
            <View
              style={{
                borderWidth: 2,
                borderColor: colors.black2,
                color: colors.black2,
                borderRadius: 20,
                justifyContent: 'center',
                marginRight: 5,
                paddingHorizontal: 5,
              }}>
              <Picker
                style={{height: 40}}
                selectedValue={gender}
                onValueChange={(itemValue, itemIndex) => setGender(itemValue)}>
                <Picker.Item
                  label="Nam"
                  value="1"
                  style={{fontSize: 14, color: colors.black2}}
                />
                <Picker.Item
                  label="Nữ"
                  value="2"
                  style={{fontSize: 14, color: colors.black2}}
                />
              </Picker>
            </View>
          </View>
          <View style={{flex: 1, marginLeft: 5}}>
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
                    borderRadius: 20,
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
                  message: 'SĐT không hợp lệ!',
                },
              }}
            />
            {errors.phoneNumber && (
              <Text style={{color: 'red', marginTop: 5}}>
                {errors.phoneNumber.message}
              </Text>
            )}
          </View>
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
                  borderRadius: 20,
                }}
              />
            )}
            name="address"
            rules={{
              required: {
                value: true,
                message: 'Trường trống',
              },
              pattern: {
                value: nameRegex,
                message: 'Tên không hợp lệ!',
              },
            }}
          />
          {errors.address && (
            <Text style={{color: 'red', marginTop: 5}}>
              {errors.address.message}
            </Text>
          )}
        </View>
        <TouchableOpacity
          onPress={handleSubmit(signup)}
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
            Đăng ký
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
            Bạn đã có tài khoản?{' '}
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Signin');
            }}>
            <Text
              style={{
                lineHeight: 30,
                fontSize: 16,
                fontWeight: 'bold',
                color: 'rgb(81, 136, 255)',
              }}>
              Đăng nhập
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Signin;
