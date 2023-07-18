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
    backgroundColor: COLORS.secondary,
  },
  upperBar: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: SIZES.xxLarge,
    width: width - 44,
    zIndex: 1,
  },
  img: {
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  detailContainer: {
    marginTop: -SIZES.large,
    width: SIZES.width,
    borderTopLeftRadius: SIZES.medium,
    borderTopRightRadius: SIZES.medium,
    backgroundColor: COLORS.secondary,
  },
  titleBar: {
    width: SIZES.width - 44,
    flexDirection: 'row',
    marginHorizontal: 20,
    paddingBottom: SIZES.small,
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 20,
  },
  title: {
    fontFamily: 'advent_semiB',
    fontSize: SIZES.xLarge,
  },
  priceWrapper: {
    backgroundColor: COLORS.alternate,
    borderRadius: SIZES.large,
  },
  price: {
    paddingHorizontal: 10,
    fontFamily: 'advent_light',
    fontSize: SIZES.medium,
    color: COLORS.white
  },
  ratingBar: {
    width: SIZES.width - 10,
    flexDirection: 'row',
    paddingBottom: SIZES.small,
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 5,
  },
  rating: {
    flexDirection: 'row',
    top: SIZES.large,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: SIZES.large,
  },
  qtyText: {
    fontFamily: 'advent_semiB',
    fontSize: SIZES.large,
    marginHorizontal: 10
  },
  descWrapper: {
    marginTop: SIZES.large * 2,
    marginHorizontal: SIZES.large,
  },
  descTitle: {
    fontFamily: 'advent_semiB',
    fontSize: SIZES.large - 2,
  },
  descText: {
    fontFamily: 'advent_regular',
    fontSize: SIZES.medium,
    marginBottom: 10
  },
  locationContain: {
    marginBottom: SIZES.small,
  },
  location: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    borderRadius: SIZES.large,
    marginHorizontal: 12,
    backgroundColor: COLORS.tertiary
  },
  locationGrp: {
    flexDirection: 'row'
  },
  cartBar: {
    width: SIZES.width,
    flexDirection: 'row',
    paddingBottom: SIZES.small,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buyNowBtn: {
    width: SIZES.width * 0.7,
    backgroundColor: COLORS.primary,
    padding: SIZES.small / 2,
    borderRadius: SIZES.large,
    marginLeft: 12,
  },
  cartText: {
    marginLeft: SIZES.small,
    fontFamily: 'advent_semiB',
    fontSize: SIZES.medium
  },
  cartBtn: {
    width: 37,
    height: 37,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: COLORS.primary,
    margin: SIZES.small,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: COLORS.alternate
  }
});

export const AndroidView = StyleSheet.create({
  paddingTop: Android ? StatusBar.currentHeight : 0,
});
