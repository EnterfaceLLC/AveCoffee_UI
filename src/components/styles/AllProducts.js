// *REACT IMPORTS BELOW //
import { StyleSheet, Dimensions, StatusBar, Platform } from "react-native";

// *STYLE CODE BELOW //
const { height, width } = Dimensions.get('window');

//* THEME IMPORT//
import { COLORS, SIZES } from "../../../theme";

//* STYLES CODE//
const Android = Platform.OS === 'android';

export const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  flexContainer: {
    alignItems: 'center',
    paddingTop: SIZES.xxLarge,
    paddingHorizontal: 1,
    paddingLeft: SIZES.small / 4,
  },
  container: {
    alignItems: 'center',
    paddingTop: SIZES.medium,
    paddingHorizontal: 1,
    paddingLeft: SIZES.small / 4,
  },
  grid: {
    height: 10,
  }
});

export const AndroidView = StyleSheet.create({
  paddingTop: Android ? StatusBar.currentHeight : 0,
});
