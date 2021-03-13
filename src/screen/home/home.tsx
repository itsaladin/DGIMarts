import React from 'react';
import {Dimensions, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
import {SelectMart} from '../../components/select-mart';

export const HomeScreen = ({navigation}: {navigation: any}) => {
  const {colors} = useTheme();
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={[styles.scrollView, {backgroundColor: colors.surface}]}>
        <SelectMart navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  scrollView: {
    height: '100%',
  },
  tImgContainer: {
    flex: 1,
    width: '100%',
    position: 'relative',
  },
  trollyIcon: {
    alignSelf: 'center',
    marginBottom: 10,
  },
  bgColorImg: {
    flex: 1,
    position: 'relative',
    width: '100%',
    height: height / 4,
    resizeMode: 'stretch',
  },
  repeatImg: {
    position: 'absolute',
    width: '100%',
    height: height / 6,
    resizeMode: 'cover',
  },
  getStartText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  gStatPara: {
    fontSize: 13,
    textAlign: 'center',
    marginHorizontal: width / 8,
  },
  martFRow: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 20,
  },
  fSurface: {
    elevation: 5,
    borderRadius: 5,
    marginHorizontal: 8,
    width: width / 4,
    height: height / 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  verifyButton: {
    borderRadius: 50,
    marginTop: height / 22,
    width: width / 2.3,
    height: height / 23,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
