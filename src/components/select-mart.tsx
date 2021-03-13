import React, {useState} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  Avatar,
  Button,
  Surface,
  TextInput,
  TouchableRipple,
  useTheme,
} from 'react-native-paper';
import {primary, yellow} from '../constant/color';

export const SelectMart = ({navigation}: {navigation: any}) => {
  const {colors} = useTheme();
  const [mart, setMart] = useState('');
  const [isMart, setIsMart] = useState(true);

  const [password, setPassword] = useState('');

  return (
    <>
      {isMart && (
        <View>
          <View style={styles.tImgContainer}>
            <Image
              style={styles.bgColorImg}
              source={require('../assets/images/signUp/CrappedGroup6.png')}
            />
            <Image
              style={styles.repeatImg}
              source={require('../assets/landing_Page/RepeatGrid1.png')}
            />
          </View>

          <View>
            <Image
              style={styles.trollyIcon}
              source={require('../assets/images/choose_mart/CroppedGroup8.png')}
            />
            <Text style={[styles.getStartText, {color: colors.placeholder}]}>
              Choose A Mart
            </Text>
            <Text style={[styles.gStatPara, {color: colors.disabled}]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
              nonumy eimode tempor.
            </Text>
          </View>

          <View style={styles.martFRow}>
            <Surface style={styles.fSurface}>
              <TouchableOpacity
                onPress={() => {
                  setMart('ALDI');
                }}>
                <Image
                  source={require('../assets/images/choose_mart/ALDI.png')}
                />
              </TouchableOpacity>
            </Surface>
            <Surface style={styles.fSurface}>
              <TouchableOpacity
                onPress={() => {
                  setMart('IGA');
                }}>
                <Image
                  source={require('../assets/images/choose_mart/IGA.png')}
                />
              </TouchableOpacity>
            </Surface>
          </View>

          <View style={styles.martFRow}>
            <Surface style={styles.fSurface}>
              <TouchableOpacity
                onPress={() => {
                  setMart('COLES');
                }}>
                <Image
                  source={require('../assets/images/choose_mart/coles.png')}
                />
              </TouchableOpacity>
            </Surface>
            <Surface style={styles.fSurface}>
              <TouchableOpacity
                onPress={() => {
                  setMart('WOOLWORTHS');
                }}>
                <Image
                  source={require('../assets/images/choose_mart/Woolworths.png')}
                />
              </TouchableOpacity>
            </Surface>
          </View>

          <Button
            style={styles.verifyButton}
            mode="contained"
            color={primary}
            uppercase={false}
            dark={true}
            compact={true}
            disabled={mart === '' ? true : false}
            onPress={() => {
              setIsMart(false);
            }}>
            Continue
          </Button>
        </View>
      )}
      {!isMart && (
        <View>
          <View style={styles.tImgContainer}>
            <Image
              style={styles.bgColorImg}
              source={require('../assets/images/home/CroppedHeader.png')}
            />
            <Image
              style={styles.repeatImg}
              source={require('../assets/landing_Page/RepeatGrid1.png')}
            />
            <View style={styles.headerAContain}>
              <TouchableRipple
                onPress={() => {
                  navigation.goBack();
                }}>
                <Avatar.Icon
                  size={35}
                  icon="arrow-left"
                  style={{backgroundColor: colors.surface}}
                  color={colors.text}
                />
              </TouchableRipple>
              <Text style={[styles.locationText, {color: colors.surface}]}>
                Rilly St. Surry Hills, NSW
              </Text>
              <TouchableRipple
                onPress={() => {
                  navigation.goBack();
                }}>
                <Avatar.Icon
                  size={35}
                  icon="cart"
                  style={{backgroundColor: colors.surface}}
                  color={colors.text}
                />
              </TouchableRipple>
            </View>
            <View style={styles.searchInputContain}>
              <TextInput
                placeholder="Search your popular shop"
                mode="flat"
                value={password}
                style={[
                  styles.inputPassword,
                  {backgroundColor: colors.surface},
                ]}
                underlineColor="white"
                onChangeText={(text) => setPassword(text)}
                left={
                  <TextInput.Icon
                    style={styles.inputEIcon}
                    color={primary}
                    size={22}
                    name="home-search-outline"
                  />
                }
              />
            </View>
          </View>

          <View style={styles.closeNearBy}>
            <Text style={[styles.nearBy, {color: colors.text}]}>
              Close Nearby
            </Text>
            <View style={styles.seeMoreContain}>
              <>
                <TouchableRipple
                  onPress={() => {
                    console.log('asdfds');
                  }}>
                  <Text style={[styles.seeMore, {color: primary}]}>
                    See more
                  </Text>
                </TouchableRipple>
                <TouchableRipple
                  onPress={() => {
                    console.log('asdfds');
                  }}>
                  <Avatar.Icon
                    size={35}
                    icon="arrow-right"
                    style={{backgroundColor: colors.surface}}
                    color={colors.disabled}
                  />
                </TouchableRipple>
              </>
            </View>
          </View>

          <Surface style={styles.shopContain}>
            <View>
              <Image
                style={styles.shopImg}
                source={require('../assets/images/home/Group23.png')}
              />
              <View style={styles.iconRow}>
                <View
                  style={[
                    styles.distanceContian,
                    {backgroundColor: colors.surface},
                  ]}>
                  <Avatar.Icon
                    size={22}
                    icon="map-marker-radius-outline"
                    style={[styles.fIcon, {backgroundColor: colors.surface}]}
                    color={primary}
                  />
                  <Text style={styles.distance}>1.3 km away</Text>
                </View>
                <TouchableRipple
                  onPress={() => {
                    navigation.goBack();
                  }}>
                  <Avatar.Icon
                    size={28}
                    icon="heart-outline"
                    style={[styles.sIcon, {backgroundColor: colors.surface}]}
                    color={primary}
                  />
                </TouchableRipple>
              </View>
              <View style={styles.shopDescContain}>
                <Surface style={styles.shopImgContain}>
                  <Image
                    style={styles.shopLogo}
                    source={require('../assets/images/choose_mart/coles.png')}
                  />
                </Surface>
                <View style={styles.shopTContian}>
                  <Text style={styles.shopName}>Coles Surry Hills </Text>
                  <Text style={[styles.shopType, {color: colors.placeholder}]}>
                    Grocery Shop
                  </Text>
                </View>
                <View style={styles.ratingContain}>
                  <Avatar.Icon
                    size={35}
                    icon="star"
                    style={{backgroundColor: colors.surface}}
                    color={yellow}
                  />
                  <Text
                    style={[styles.shopRationg, {color: colors.placeholder}]}>
                    4.2
                  </Text>
                </View>
              </View>
            </View>
          </Surface>

          <View style={styles.closeNearBy}>
            <Text style={[styles.nearBy, {color: colors.text}]}>
              Convenient Shops Nearby
            </Text>
            <View style={styles.seeMoreContain}>
              <>
                <TouchableRipple
                  onPress={() => {
                    console.log('asdfds');
                  }}>
                  <Text style={[styles.seeMore, {color: primary}]}>
                    See more
                  </Text>
                </TouchableRipple>
                <TouchableRipple
                  onPress={() => {
                    console.log('asdfds');
                  }}>
                  <Avatar.Icon
                    size={35}
                    icon="arrow-right"
                    style={{backgroundColor: colors.surface}}
                    color={colors.disabled}
                  />
                </TouchableRipple>
              </>
            </View>
          </View>

          <Surface style={styles.shopContain}>
            <View>
              <Image
                style={styles.shopImg}
                source={require('../assets/images/signUp/shopImg.png')}
              />
              <View style={styles.iconRow}>
                <View
                  style={[
                    styles.distanceContian,
                    {backgroundColor: colors.surface},
                  ]}>
                  <Avatar.Icon
                    size={22}
                    icon="map-marker-radius-outline"
                    style={[styles.fIcon, {backgroundColor: colors.surface}]}
                    color={primary}
                  />
                  <Text style={styles.distance}>1.3 km away</Text>
                </View>
                <TouchableRipple
                  onPress={() => {
                    navigation.goBack();
                  }}>
                  <Avatar.Icon
                    size={28}
                    icon="heart-outline"
                    style={[styles.sIcon, {backgroundColor: colors.surface}]}
                    color={primary}
                  />
                </TouchableRipple>
              </View>
              <View style={styles.shopDescContain}>
                <Surface style={styles.shopImgContain}>
                  <Image
                    style={styles.shopLogo}
                    source={require('../assets/images/choose_mart/coles.png')}
                  />
                </Surface>
                <View style={styles.shopTContian}>
                  <Text style={styles.shopName}>Coles Surry Hills </Text>
                  <Text style={[styles.shopType, {color: colors.placeholder}]}>
                    Grocery Shop
                  </Text>
                </View>
                <View style={styles.ratingContain}>
                  <Avatar.Icon
                    size={35}
                    icon="star"
                    style={{backgroundColor: colors.surface}}
                    color={yellow}
                  />
                  <Text
                    style={[styles.shopRationg, {color: colors.placeholder}]}>
                    4.2
                  </Text>
                </View>
              </View>
            </View>
          </Surface>
        </View>
      )}
    </>
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
    marginBottom: height / 18,
  },
  headerAContain: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    width: width,
    justifyContent: 'space-around',
    top: 15,
  },
  locationText: {
    fontSize: 15,
    alignSelf: 'center',
  },
  trollyIcon: {
    alignSelf: 'center',
    marginBottom: 10,
  },
  bgColorImg: {
    flex: 1,
    position: 'relative',
    width: '100%',
    height: height / 7,
    resizeMode: 'stretch',
  },
  shopImgContain: {
    resizeMode: 'contain',
    borderRadius: 50,
    borderColor: 'black',
    borderWidth: 0.1,
  },
  shopLogo: {
    flex: 1,
    width: width / 10,
    resizeMode: 'contain',
  },
  repeatImg: {
    position: 'absolute',
    width: '100%',
    height: height / 8,
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
  inputEIcon: {
    paddingTop: 10,
  },
  searchInputContain: {
    flex: 1,
    width: width / 1.2,
    flexDirection: 'row',
    position: 'absolute',
    alignSelf: 'center',
  },
  inputPassword: {
    flex: 1,
    height: 35,
    fontSize: 12,
    elevation: 5,
    borderTopEndRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingVertical: 5,
    top: height / 10,
  },
  closeNearBy: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  nearBy: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  seeMoreContain: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  seeMore: {},

  proElevation: {
    elevation: 5,
  },
  proElevationNew: {
    elevation: 5,
    alignItems: 'center',
    alignSelf: 'center',
  },
  products: {
    width: width / 2 - 5,
    marginTop: 5,
    marginRight: 3,
  },
  newProducts: {
    width: width / 2 - 5,
    marginTop: 5,
    marginRight: 3,
  },
  categoryContent: {
    margin: 5,
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
    width: '100%',
    height: 100,
    aspectRatio: 2,
    marginBottom: 4,
    marginTop: 6,
    borderRadius: 10,
  },

  shopContain: {
    elevation: 4,
    width: width / 1.8,
    marginHorizontal: 15,
    borderRadius: 15,
    marginBottom: 20,
  },
  shopImg: {
    flex: 1,
    borderRadius: 10,
    position: 'relative',
    width: width / 1.8,
    height: height / 5,
  },
  iconRow: {
    flex: 1,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  fIcon: {},
  sIcon: {
    marginLeft: width / 5.5,
  },
  distanceContian: {
    marginLeft: 10,
    flexDirection: 'row',
    marginTop: height / 9,
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
  },
  distance: {
    fontSize: 11,
    fontWeight: 'bold',
    paddingRight: 5,
  },
  shopDescContain: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 8,
  },
  shopTContian: {},
  shopName: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  shopType: {
    fontSize: 10,
  },
  ratingContain: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shopRationg: {
    fontSize: 12,
  },
});
