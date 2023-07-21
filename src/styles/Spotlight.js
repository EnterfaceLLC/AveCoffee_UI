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
  wrapper: {
    // flex: 1,
    // backgroundColor: COLORS.secondary,
  },
  upperBar: {
    width: SIZES.width - 50,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: SIZES.xSmall,
    borderRadius: SIZES.large,
    justifyContent: 'space-between',
    marginHorizontal: SIZES.large,
    backgroundColor: COLORS.alternate,
    zIndex: 1,
  },
  back: {
    marginLeft: 5,
  },
  barText: {
    fontFamily: 'advent_regular',
    fontSize: SIZES.large,
    color: COLORS.off_white,
    marginRight: SIZES.xSmall,
  }
});

export const AndroidView = StyleSheet.create({
  paddingTop: Android ? StatusBar.currentHeight : 0,
});
