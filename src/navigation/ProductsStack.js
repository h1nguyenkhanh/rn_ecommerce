import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Products from '../screens/Products';
import ProductDetail from '../screens/ProductDetail';

const Stack = createStackNavigator();

function ProductsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: false,
        headerShown: false,
      }}>
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}

export default ProductsStack;
