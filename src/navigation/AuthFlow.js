import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Signin from '../screens/Signin';
import Signup from '../screens/Signup';

const Stack = createStackNavigator();

function AuthFlow() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: false,
        headerShown: false,
      }}>
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}

export default AuthFlow;
