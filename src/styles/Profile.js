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
    height: height / 5,
    backgroundColor: COLORS.tertiary
  },
  avatarContainer: {
    flex: 1,
    alignItems: 'center',
  },
  avatar: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 3,
    borderColor: COLORS.off_white,
    resizeMode: 'cover',
    marginTop: -90
  },
  name: {
    fontSize: 26,
    fontFamily: 'advent_regular',
    marginVertical: 10,
  },
  loginBtn: {
    width: 150,
    padding: 5,
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: COLORS.off_white,
    borderRadius: SIZES.xxLarge,
    backgroundColor: COLORS.primary,
  },
  loginTxt: {
    fontFamily: 'advent_regular',
    fontSize: 18,
    letterSpacing: 1,
    color: COLORS.off_white
  },
  userInfo: {
    padding: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: COLORS.off_white,
    borderRadius: SIZES.xxLarge,
    backgroundColor: COLORS.alternate,
  },
  infoTxt: {
    fontFamily: 'advent_regular',
    fontSize: 16,
    letterSpacing: 1,
    color: COLORS.off_white
  },
  menuContainer: {
    marginTop: SIZES.xLarge,
    width: SIZES.width - SIZES.xxLarge,
    backgroundColor: COLORS.off_white,
    borderRadius: 12,
  },
  menuItem: (borderBottomWidth) => ({
    borderBottomWidth: borderBottomWidth,
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderColor: COLORS.alternate
  }),
  menuTxt: {
    fontFamily: 'advent_regular',
    fontSize: 20,
    letterSpacing: 1,
    marginLeft: 15
  }
});

export const AndroidView = StyleSheet.create({
  paddingTop: Android ? StatusBar.currentHeight : 0,
});
