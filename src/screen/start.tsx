import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button, TouchableRipple, useTheme} from 'react-native-paper';
import {primary, secondary, tertiary} from '../constant/color';

export const StartScreen = ({navigation}: {navigation: any}) => {
  const {colors} = useTheme();
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.tImgContainer}>
          <Image
            style={styles.bgColorImg}
            source={require('../assets/landing_Page/Group3.png')}
          />
          <Image
            style={styles.trollyImg}
            source={require('../assets/landing_Page/Group1.png')}
          />
          <Image
            style={styles.repeatImg}
            source={require('../assets/landing_Page/RepeatGrid1.png')}
          />
        </View>

        <View style={styles.mainContainer}>
          <Image
            style={styles.dgiLogo}
            source={require('../assets/landing_Page/Group21.png')}
          />
          <Text style={styles.getStartText}>LET'S GET STARTED</Text>
          <Text style={[styles.gStatPara, {color: colors.disabled}]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
            nonumy.
          </Text>
        </View>
        <Button
          style={styles.verifyButton}
          mode="contained"
          color={primary}
          dark={true}
          onPress={() => {
            navigation.navigate('SignUp');
          }}>
          Sign Up
        </Button>

        <View style={styles.btnContainer}>
          <Image source={require('../assets/landing_Page/Line1.png')} />
          <Image source={require('../assets/landing_Page/OR.png')} />
          <Image source={require('../assets/landing_Page/Line1.png')} />
        </View>
        <Button
          style={styles.singInBtn}
          mode="contained"
          color={tertiary}
          dark={true}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          Sign In
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  tImgContainer: {
    flex: 1,
    width: '100%',
    position: 'relative',
  },
  bgColorImg: {
    flex: 1,
    position: 'relative',
    width: '100%',
    height: height / 2.2,
    resizeMode: 'stretch',
  },
  trollyImg: {
    position: 'absolute',
    alignSelf: 'center',
    resizeMode: 'stretch',
    top: 25,
  },
  repeatImg: {
    position: 'absolute',
    width: '100%',
    height: height / 2.5,
    resizeMode: 'stretch',
  },
  dgiLogo: {
    marginTop: 30,
    alignSelf: 'center',
  },
  getStartText: {
    fontSize: 18,
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 2,
  },
  gStatPara: {
    fontSize: 13,
    textAlign: 'center',
  },
  mainContainer: {
    alignSelf: 'center',
    marginHorizontal: width / 5,
  },
  signUp: {
    alignSelf: 'center',
    marginTop: 30,
  },
  signIn: {
    alignSelf: 'center',
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 5,
    alignSelf: 'center',
    alignItems: 'center',
    textAlign: 'center',
    alignContent: 'center',
  },
  verifyButton: {
    borderRadius: 50,
    justifyContent: 'center',
    height: height / 20,
    marginTop: height / 25,
    marginHorizontal: width / 6,
  },
  singInBtn: {
    borderRadius: 50,
    height: height / 20,
    justifyContent: 'center',
    marginHorizontal: width / 6,
  },
});
