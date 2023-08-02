// *REACT IMPORTS BELOW //
import { StyleSheet, Dimensions, StatusBar, Platform } from "react-native";

// *STYLE CODE BELOW //
const { height, width } = Dimensions.get('window');

//* THEME IMPORT//
import { COLORS, SIZES } from "../../theme";

//* STYLES CODE//
const Android = Platform.OS === 'android';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.off_white,
  },
  cover: {
    width: '100%',
    height: height / 4,
    backgroundColor: COLORS.tertiary
  },
  avatarContainer: {
    flex: 1,
    alignItems: 'center',
  },
  avatar: {
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 3,
    borderColor: COLORS.off_white,
    resizeMode: 'cover',
    marginTop: -90
  },
  name: {
    fontSize: 30,
    fontFamily: 'advent_regular',
    marginVertical: 10,
  },
  loginBtn: {
    // width: 150,
    padding: 5,
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: COLORS.off_white,
    borderRadius: SIZES.xxLarge,
    backgroundColor: COLORS.alternate,
  },
  loginTxt: {
    fontFamily: 'advent_regular',
    fontSize: 18,
    letterSpacing: 1,
    color: COLORS.off_white
  },
  userInfo: {
    width: 150,
    padding: 5,
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: COLORS.off_white,
    borderRadius: SIZES.xxLarge,
    backgroundColor: COLORS.primary,
  },
  infoTxt: {
    fontFamily: 'advent_regular',
    fontSize: 18,
    letterSpacing: 1,
    color: COLORS.off_white
  },
});

export const AndroidView = StyleSheet.create({
  paddingTop: Android ? StatusBar.currentHeight : 0,
});
