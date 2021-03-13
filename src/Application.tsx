/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackNavigator} from './navigators/stack-navigation';
import {Provider as PaperProvider} from 'react-native-paper';

const Application = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default Application;
