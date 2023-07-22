// *REACT IMPORTS BELOW //
import { StyleSheet, Dimensions, StatusBar, Platform } from "react-native";

// *STYLE CODE BELOW //
const { height, width } = Dimensions.get('window');

//* THEME IMPORT//
import { COLORS, SIZES, SHADOWS } from '../../../theme';

//* STYLES CODE//
const Android = Platform.OS === 'android';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: SIZES.small,
    padding: SIZES.small,
    marginBottom: SIZES.small,
    backgroundColor: COLORS.tertiary,
    ...SHADOWS.medium,
    shadowColor: COLORS.lightWhite,
  },
  image: {
    width: 70,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.medium,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImg: {
    width: '100%',
    height: 65,
    borderRadius: SIZES.small,
    resizeMode: 'cover',
  },
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
  },
  title: {
    fontSize: SIZES.large,
    fontFamily: 'advent_semiB'
  },
  category: {
    fontFamily: 'advent_regular',
    fontSize: SIZES.medium,
    marginTop: 2,
  },
  price: {
    fontSize: SIZES.medium,
    fontFamily: 'advent_regular',
    color: COLORS.highlight,
    marginTop: 2,
  },
});

export const AndroidView = StyleSheet.create({
  paddingTop: Android ? StatusBar.currentHeight : 0,
});
