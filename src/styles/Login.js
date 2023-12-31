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
  txtContnr: {
    alignItems: 'flex-end',
    marginVertical: 10,
  },
  heading: {
    fontSize: 30,
    fontFamily: 'advent_light',
  },
  focusTxt: {
    color: COLORS.tertiary,
    fontSize: 50, fontFamily: 'advent_light',
  },


});

export const AndroidView = StyleSheet.create({
  paddingTop: Android ? StatusBar.currentHeight : 0,
});
