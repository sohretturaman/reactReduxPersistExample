import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomePage, NotePage} from '../screens';
import {RouteName} from '../config';
import AuthStack from './AuthStack';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

const StackNav = () => {
  const myUser = useSelector(state => state.authReducer?.user);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={RouteName.HOMEPAGE} component={myUser? HomePage : AdminHome} />
      <Stack.Screen name={RouteName.NOTEPAGE} component={NotePage} />
    </Stack.Navigator>
  );
};

const Root = createNativeStackNavigator();
const RootStack = () => {
  const myUser = useSelector(state => state.authReducer?.user);

  return (
    <Root.Navigator screenOptions={{headerShown: false}}>
      {myUser && <Root.Screen name={'AuthStack'} component={AuthStack} />}
      <Root.Screen name={'MainStack'} component={ StackNav} />
    </Root.Navigator>
  );
};

export default RootStack;
