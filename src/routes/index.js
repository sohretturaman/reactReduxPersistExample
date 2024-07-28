import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import StackNav from './StackNav';
import {persistor, store} from '../redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import AuthStack from './AuthStack';
import RootStack from './StackNav';

const index = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
            <RootStack/>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};



export default index;
