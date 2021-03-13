import React, {useEffect} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {primary} from '../../constant/color';

export const LoadScreen = ({navigation}: {navigation: any}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Start');
    }, 2000);
  }, [navigation]);
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={[styles.container, {backgroundColor: primary}]} />
      </ScrollView>
    </SafeAreaView>
  );
};

const {height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    height: height,
  },
});
