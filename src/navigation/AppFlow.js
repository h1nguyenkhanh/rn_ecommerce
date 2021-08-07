/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/Entypo';

import {colors} from '../assets/styles';
import Home from '../screens/Home';
import Products from '../screens/Products';
import Order from '../screens/Order';
import News from '../screens/News';
import Account from '../screens/Account';
import Admin from '../screens/Admin';

import ProductsStack from './ProductsStack';
import {useSelector} from 'react-redux';
import OrderStack from './OrderStack';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function MyTabBar({state, descriptors, navigation}) {
  const cartData = useSelector(store => store.cart);

  return (
    <View style={styles.bottomTab}>
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          const getIcon = () => {
            switch (route.name) {
              case 'Home':
                return 'shop';
              case 'ProductsStack':
                return 'shopping-basket';
              case 'OrderStack':
                return 'shopping-cart';
              case 'News':
                return 'newsletter';
              case 'Account':
                return 'user';
            }
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.button}
              key={index}>
              <Icons
                name={getIcon()}
                size={27}
                style={[
                  {
                    backgroundColor: isFocused ? colors.green1 : 'transparent',
                    color: isFocused ? colors.white1 : colors.gray1,
                    borderRadius: 999,
                    padding: 10,
                  },
                  isFocused && styles.activeShadow,
                ]}
              />
              {route.name === 'OrderStack' && cartData.totalQuantity > 0 && (
                <Text
                  style={[
                    {
                      position: 'absolute',
                      backgroundColor: colors.orange1,
                      paddingHorizontal: 5,
                      borderRadius: 999,
                      color: '#fff',
                      fontWeight: 'bold',
                    },
                    {
                      transform: [{translateX: 15}],
                    },
                  ]}>
                  {cartData.totalQuantity}
                </Text>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const AppFlow = () => {
  return (
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} style={{backgroundColor: 'red'}} />}
      tabBarOptions={{
        style: {
          backgroundColor: 'red',
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          elevation: 0,
        },
      }}>
      <Tab.Screen name="ProductsStack" component={ProductsStack} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="News" component={News} />
      <Tab.Screen name="OrderStack" component={OrderStack} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};
var styles = StyleSheet.create({
  bottomTab: {
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 50,
    marginHorizontal: 10,
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: colors.white1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    borderWidth: 1,
    borderColor: '#eee',
  },
  button: {
    flex: 1,
    alignItems: 'center',
  },
  activeShadow: {},
});

export default AppFlow;
