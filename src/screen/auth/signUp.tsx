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
import {
  Avatar,
  Button,
  TextInput,
  TouchableRipple,
  useTheme,
} from 'react-native-paper';
import {primary, tertiary} from '../../constant/color';

export const SignUpScreen = ({navigation}: {navigation: any}) => {
  const {colors} = useTheme();
  const [name, setName] = useState('');
  const [email, setEmal] = useState('');
  const [mobile, setMoblie] = useState('');
  const [password, setPassword] = useState('');

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
            source={require('../../assets/images/signUp/CrappedGroup6.png')}
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
          <Text style={styles.getStartText}>Create Your Account</Text>
          <Text style={[styles.gStatPara, {color: colors.disabled}]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
            nonumy.
          </Text>
          <TextInput
            placeholder="Your Name"
            mode="flat"
            value={name}
            style={styles.inputName}
            underlineColor={primary}
            onChangeText={(text) => setName(text)}
            left={
              <TextInput.Icon
                style={styles.inputEIcon}
                size={18}
                name="account-multiple-outline"
              />
            }
          />
          <TextInput
            placeholder="Mobile Number"
            mode="flat"
            value={mobile}
            style={styles.inputName}
            underlineColor={primary}
            onChangeText={(text) => setMoblie(text)}
            left={
              <TextInput.Icon
                size={18}
                style={styles.inputEIcon}
                name="cellphone-iphone"
              />
            }
          />
          <TextInput
            placeholder="Email"
            mode="flat"
            value={email}
            style={styles.inputPassword}
            underlineColor={primary}
            onChangeText={(text) => setEmal(text)}
            left={
              <TextInput.Icon
                style={styles.inputEIcon}
                size={18}
                name="email"
              />
            }
          />
          <TextInput
            placeholder="Password"
            mode="flat"
            value={password}
            style={styles.inputPassword}
            underlineColor={primary}
            onChangeText={(text) => setPassword(text)}
            left={
              <TextInput.Icon
                style={styles.inputEIcon}
                size={18}
                name="lock-outline"
              />
            }
          />
        </View>

        <Button
          style={styles.verifyButton}
          mode="contained"
          color={tertiary}
          uppercase={false}
          onPress={() => {
            navigation.navigate('Verify');
          }}>
          Create Your Account
        </Button>

        <View style={styles.haveAccContain}>
          <TouchableRipple
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text style={[styles.haveAccoutn, {color: primary}]}>
              Already Have An Account ?
            </Text>
          </TouchableRipple>
          <Text> Log In Here</Text>
        </View>

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
  inputName: {
    backgroundColor: 'white',
    elevation: 2,
    height: 28,
    fontSize: 12,
    paddingVertical: 5,
    marginBottom: 10,
    borderRadius: 5,
  },
  inputEIcon: {
    paddingTop: 10,
  },
  inputPassword: {
    backgroundColor: 'white',
    elevation: 2,
    height: 28,
    fontSize: 12,
    paddingVertical: 5,
    borderRadius: 5,
    marginBottom: 10,
  },
  createAccount: {
    alignSelf: 'center',
    marginTop: 10,
  },
  haveAccContain: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  haveAccoutn: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  fImgContain: {
    flex: 1,
    width: '100%',
    position: 'relative',
    marginTop: 21,
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
  verifyButton: {
    marginTop: 10,
    borderRadius: 50,
    marginHorizontal: width / 6,
    height: height / 20,
    justifyContent: 'center',
    marginBottom: height / 80,
  },
});
