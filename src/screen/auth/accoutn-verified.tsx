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
import {Avatar, Button, TouchableRipple, useTheme} from 'react-native-paper';
import {primary, tertiary} from '../../constant/color';

export const VerifiedScreen = ({navigation}: {navigation: any}) => {
  const {colors} = useTheme();

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

        <View>
          <Text style={styles.getStartText}>Account Verified</Text>
          <Text style={[styles.gStatPara, {color: colors.disabled}]}>
            Your accoutn hasbeed verified successfully!
          </Text>
          <View style={styles.verifyCodeContain}>
            <Image
              source={require('../../assets/images/logo/Icoawesome-check-circle.png')}
            />
          </View>
        </View>

        <Button
          style={styles.verifyButton}
          mode="contained"
          color={tertiary}
          uppercase={false}
          onPress={() => {
            navigation.navigate('BottomTab');
          }}>
          Continue
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
    marginBottom: 5,
    textAlign: 'center',
  },
  gStatPara: {
    fontSize: 13,
    textAlign: 'center',
  },
  verifyCodeContain: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 50,
    height: height / 5,
  },
  verifyButton: {
    marginHorizontal: width / 6,
    borderRadius: 50,
    marginTop: 10,
  },
  fImgContain: {
    flex: 1,
    width: '100%',
    position: 'relative',
    marginTop: height / 6.5,
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
