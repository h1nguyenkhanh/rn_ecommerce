import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import MainNavigation from './src/navigation';
import store from './src/redux/store';
import Entry from './src/screens/Entry';
import {NativeBaseProvider} from 'native-base';

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <Entry>
          <MainNavigation></MainNavigation>
        </Entry>
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
