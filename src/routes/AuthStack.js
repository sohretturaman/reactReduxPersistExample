import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomePage, NotePage} from '../screens';
import {RouteName} from '../config';
import Login from '../screens/Login';
import Signup from '../screens/Signup';

const Stack = createNativeStackNavigator();

export default StackNav = () => {
  return (
    <Stack.Navigator  screenOptions={{headerShown: false}}>
      <Stack.Screen name={RouteName.LOGIN} component={Login} />
      <Stack.Screen name={RouteName.SIGNUP} component={Signup} />
    </Stack.Navigator>
  );
};
