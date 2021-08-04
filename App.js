import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import MainNavigation from './src/navigation';
import store from './src/redux/store';
import Entry from './src/screens/Entry';

const App = () => {
  return (
    <Provider store={store}>
      <Entry>
        <MainNavigation></MainNavigation>
      </Entry>
    </Provider>
  );
};

export default App;
