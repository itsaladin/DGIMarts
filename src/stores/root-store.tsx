import AsyncStorage from '@react-native-async-storage/async-storage';
import {applySnapshot, onSnapshot} from 'mobx-state-tree';
import React, {createContext, useContext, useState} from 'react';
import useAsyncEffect from 'use-async-effect';
import {RootStore, RootStoreType} from '../stores/root';

const RootStoreContext = createContext<RootStoreType | null>(null);

export const RootStoreProvider = ({children}: {children: any}) => {
  const [store, setStore] = useState<RootStoreType>();

  useAsyncEffect(async (isMounted) => {
    const _store = RootStore.create();
    const data = await AsyncStorage.getItem('rootStore');
    if (data) {
      const json = JSON.parse(data);
      console.log('Hydrating Store from AsyncStorage');
      applySnapshot(_store, json);
    }
    onSnapshot(_store, (snapshot) => {
      console.log('Saving Store to AsyncStorage');
      AsyncStorage.setItem('rootStore', JSON.stringify(snapshot));
    });
    if (isMounted()) {
      setStore(_store);
    }
  }, []);

  if (!store) {
    return null;
  }

  return (
    <RootStoreContext.Provider value={store}>
      {children}
    </RootStoreContext.Provider>
  );
};

export const useRootStore = () => {
  const store = useContext(RootStoreContext);
  if (!store) {
    throw new Error('useRootStore must be used within a RootStoreProvider.');
  }
  return store;
};
