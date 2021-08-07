import * as React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../screens/Home';
import Products from '../screens/Products';
import Order from '../screens/Order';
import News from '../screens/News';
import Account from '../screens/Account';
import AppFlow from './AppFlow';
import AuthFlow from './AuthFlow';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const MainNavigation = () => {
  // if (auth.isSplashShow) {
  //   return <Splash />;
  // }
  return (
    <NavigationContainer>
      {/* <AppFlow></AppFlow> */}
      <AuthFlow />
    </NavigationContainer>
  );
};

export default MainNavigation;
