import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {VerifyAccScreen} from '../screen/auth/account-verify';
import {VerifiedScreen} from '../screen/auth/accoutn-verified';
import {LoginScreen} from '../screen/auth/login';
import {SignUpScreen} from '../screen/auth/signUp';
import {HomeScreen} from '../screen/home/home';
import {LoadScreen} from '../screen/loading/load';
import {StartScreen} from '../screen/start';
import {BottomTabNavigator} from './bottom-navigator';

const Stack = createStackNavigator();

export const RootStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Load">
      <Stack.Screen
        name="Load"
        component={LoadScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Start"
        component={StartScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Verify"
        component={VerifyAccScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Verified"
        component={VerifiedScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BottomTab"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
