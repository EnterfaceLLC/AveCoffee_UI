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
  searchContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    marginVertical: SIZES.medium,
    marginHorizontal: SIZES.small,
  },
  searchIcon: {
    marginHorizontal: 10,
    color: COLORS.alternate,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    marginRight: SIZES.small,
    borderRadius: SIZES.small,
  },
  input: {
    fontFamily: 'advent_regular',
    width: '100%',
    height: '100%',
    paddingHorizontal: SIZES.small,
    fontSize: SIZES.medium
  },
  searchBtn: {
    width: 50,
    height: '100%',
    borderRadius: SIZES.medium,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.alternate,
  },
  resultContain: {
    flex: 1,
  },
  textContainer: {
    position: 'absolute',
    // top: SIZES.small,
    left: SIZES.large,
    zIndex: 1,
  },
  searchText: {
    color: COLORS.black,
    fontFamily: 'advent_regular',
    fontSize: SIZES.xxLarge + 10,
  },
  searchImg: {
    resizeMode: 'cover',
    width: SIZES.width,
    height: SIZES.height,
  }
});

export const AndroidView = StyleSheet.create({
  paddingTop: Android ? StatusBar.currentHeight : 0,
});
