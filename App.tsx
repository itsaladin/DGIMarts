import React from 'react';
import {Application} from './src/application';
import {Provider as PaperProvider} from 'react-native-paper';
import {RootStoreProvider} from './src/services/root-store-service';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ToastProvider} from 'react-native-paper-toast';

const App = () => {
  return (
    <RootStoreProvider>
      <SafeAreaProvider>
        <PaperProvider>
          <ToastProvider>
            <Application />
          </ToastProvider>
        </PaperProvider>
      </SafeAreaProvider>
    </RootStoreProvider>
  );
};

export default App;
