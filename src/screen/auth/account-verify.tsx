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

export const VerifyAccScreen = ({navigation}: {navigation: any}) => {
  const {colors} = useTheme();
  const [name, setName] = useState('');
  const [email, setEmal] = useState('');
  const [mobile, setMoblie] = useState('');
  const [password, setPassword] = useState('');

  const csStyles = StyleSheet.create({
    //common styles
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

        <View>
          <Text style={styles.getStartText}>Account Verification</Text>
          <Text style={[styles.gStatPara, {color: colors.disabled}]}>
            A Verification code has been this number:
          </Text>
          <Text style={[styles.verifyNumber, {color: colors.disabled}]}>
            +8801760****92
          </Text>
          <View style={styles.verifyCodeContain}>
            <TextInput
              mode="flat"
              value={name}
              style={styles.inputName}
              underlineColor={primary}
              onChangeText={(text) => setName(text)}
            />
            <TextInput
              mode="flat"
              value={mobile}
              style={styles.inputName}
              underlineColor={primary}
              onChangeText={(text) => setMoblie(text)}
            />
            <TextInput
              mode="flat"
              value={email}
              style={styles.inputPassword}
              underlineColor={primary}
              onChangeText={(text) => setEmal(text)}
            />
            <TextInput
              mode="flat"
              value={password}
              style={styles.inputPassword}
              underlineColor={primary}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
        </View>

        <Text style={[styles.otpTime, {color: colors.disabled}]}>
          The verification code expires in 00:56s
        </Text>
        <Button
          style={styles.verifyButton}
          mode="contained"
          color={tertiary}
          uppercase={false}
          onPress={() => {
            navigation.navigate('Verified');
          }}>
          Verify Account
        </Button>

        <View style={styles.haveAccContain}>
          <TouchableRipple
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text style={[styles.haveAccoutn, {color: primary}]}>
              Resend Code ?
            </Text>
          </TouchableRipple>
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
    marginTop: 5,
    marginBottom: 2,
    textAlign: 'center',
  },
  gStatPara: {
    fontSize: 13,
    textAlign: 'center',
  },
  verifyNumber: {
    fontSize: 13,
    textAlign: 'center',
  },
  otpTime: {
    fontSize: 12,
    textAlign: 'center',
  },
  verifyCodeContain: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  inputName: {
    backgroundColor: 'white',
    elevation: 2,
    height: 80,
    width: 80,
    margin: 5,
    fontSize: 50,
    paddingVertical: 5,
    marginBottom: 10,
    borderRadius: 5,
    textAlign: 'center',
  },
  inputEIcon: {
    paddingTop: 10,
  },
  inputPassword: {
    backgroundColor: 'white',
    elevation: 2,
    height: 80,
    width: 80,
    margin: 5,
    fontSize: 50,
    paddingVertical: 5,
    marginBottom: 10,
    borderRadius: 5,
    textAlign: 'center',
  },
  verifyButton: {
    marginHorizontal: width / 6,
    borderRadius: 50,
    marginTop: 10,
  },
  haveAccContain: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
  },
  haveAccoutn: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  fImgContain: {
    flex: 1,
    width: '100%',
    position: 'relative',
    marginTop: height / 6.3,
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
});
