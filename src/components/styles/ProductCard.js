// *REACT IMPORTS BELOW //
import { StyleSheet, Dimensions, StatusBar, Platform } from "react-native";

// *STYLE CODE BELOW //
const { height, width } = Dimensions.get('window');

//* THEME IMPORT//
import { COLORS, SIZES } from '../../../theme';

//* STYLES CODE//
const Android = Platform.OS === 'android';

export const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 240,
    marginEnd: 10,
    marginBottom: 50,
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.tertiary
  },
  imgContainer: {
    flex: 1,
    width: 158,
    marginLeft: SIZES.small / 2,
    marginTop: SIZES.small / 2,
    borderRadius: SIZES.small,
    overflow: 'hidden',
    // backgroundColor: 'red',
  },
  img: {
    resizeMode: 'cover',
    aspectRatio: 1,
  },
  details: {
    padding: SIZES.xSmall,
  },
  title: {
    fontFamily: 'advent_semiB',
    fontSize: SIZES.large,
  },
  brand: {
    fontFamily: 'advent_regular',
    fontSize: SIZES.small,
  },
  price: {
    fontFamily: 'advent_semiB',
    fontSize: SIZES.medium,
  },
  addBtn: {
    position: 'absolute',
    bottom: SIZES.xSmall,
    right: SIZES.xSmall,
  }
});

export const AndroidView = StyleSheet.create({
  paddingTop: Android ? StatusBar.currentHeight : 0,
});
