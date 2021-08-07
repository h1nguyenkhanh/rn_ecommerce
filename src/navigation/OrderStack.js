import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Order from '../screens/Order';
import Checkout from '../screens/Checkout';

const Stack = createStackNavigator();

function OrderStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: false,
        headerShown: false,
      }}>
      <Stack.Screen name="Order" component={Order} />
      <Stack.Screen
        name="Checkout"
        component={Checkout}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}

export default OrderStack;
