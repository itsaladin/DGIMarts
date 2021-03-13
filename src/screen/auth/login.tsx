import React, {useState} from 'react';
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
import {
  Avatar,
  Button,
  TextInput,
  TouchableRipple,
  useTheme,
} from 'react-native-paper';
import {primary, tertiary} from '../../constant/color';

export const LoginScreen = ({navigation}: {navigation: any}) => {
  const {colors} = useTheme();
  const [email, setEmal] = useState('');

  const csStyles = StyleSheet.create({
    backIcon: {
      position: 'absolute',
      top: 20,
      left: 25,
    },
  });
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={[styles.scrollView, {backgroundColor: colors.surface}]}>
        <View style={styles.tImgContainer}>
          <Image
            style={styles.bgColorImg}
            source={require('../../assets/images/login/CroppedGroup6.png')}
          />
          <Image
            style={styles.repeatImg}
            source={require('../../assets/landing_Page/RepeatGrid1.png')}
          />

          <TouchableRipple
            style={csStyles.backIcon}
            onPress={() => {
              navigation.goBack();
            }}>
            <Avatar.Icon
              size={35}
              icon="arrow-left"
              style={{backgroundColor: colors.surface}}
              color={primary}
            />
          </TouchableRipple>
        </View>

        <View style={styles.mainContainer}>
          <Text style={styles.getStartText}>Sign In To Your Account</Text>
          <Text style={[styles.gStatPara, {color: colors.disabled}]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
            nonumy.
          </Text>

          <TextInput
            placeholder="Email Address/Number"
            mode="flat"
            value={email}
            style={styles.inputEmail}
            underlineColor={primary}
            onChangeText={(text) => setEmal(text)}
            left={
              <TextInput.Icon
                style={styles.inputEIcon}
                name="account-multiple-outline"
              />
            }
          />
          <TextInput
            placeholder="Password"
            mode="flat"
            value={email}
            style={styles.inputPassword}
            underlineColor={primary}
            onChangeText={(text) => setEmal(text)}
            left={
              <TextInput.Icon style={styles.inputEIcon} name="lock-outline" />
            }
          />
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text style={[styles.forgotPassText, {color: primary}]}>
            Forgot Password ?
          </Text>
        </TouchableOpacity>

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

        <View style={styles.fImgContain}>
          <Image
            style={styles.fFirstImg}
            source={require('../../assets/images/login/Path87.png')}
          />
          <Image
            style={styles.fSecondImg}
            source={require('../../assets/images/login/Path88.png')}
          />
          <Image
            style={styles.fThirdImg}
            source={require('../../assets/images/login/CuttedPath89.png')}
          />
        </View>
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
  bgColorImg: {
    flex: 1,
    position: 'relative',
    width: '100%',
    height: height / 3.5,
    resizeMode: 'stretch',
  },
  repeatImg: {
    position: 'absolute',
    width: '100%',
    height: height / 5.5,
    resizeMode: 'cover',
  },
  mainContainer: {
    marginHorizontal: width / 15,
    marginTop: height / 20,
  },
  getStartText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 2,
  },
  gStatPara: {
    fontSize: 13,
    textAlign: 'justify',
    marginVertical: 10,
  },
  inputEmail: {
    backgroundColor: 'white',
    elevation: 2,
    height: 35,
    fontSize: 14,
    paddingVertical: 5,
    marginVertical: 15,
    borderRadius: 5,
  },
  inputEIcon: {
    paddingTop: 10,
  },
  inputPassword: {
    backgroundColor: 'white',
    elevation: 2,
    height: 35,
    fontSize: 14,
    paddingVertical: 5,
    borderRadius: 5,
  },
  signIn: {
    alignSelf: 'center',
  },
  forgotPassText: {
    fontSize: 13,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: height / 25,
    marginBottom: 12,
  },
  fImgContain: {
    flex: 1,
    width: '100%',
    position: 'relative',
    marginTop: height / 14,
  },
  fFirstImg: {
    flex: 1,
    position: 'relative',
    width: '100%',
  },
  fSecondImg: {
    flex: 1,
    width: '100%',
    resizeMode: 'stretch',
    position: 'absolute',
  },
  fThirdImg: {
    flex: 1,
    width: '100%',
    resizeMode: 'stretch',
    position: 'absolute',
  },
  singInBtn: {
    borderRadius: 50,
    height: height / 20,
    justifyContent: 'center',
    marginHorizontal: width / 6,
  },
});
