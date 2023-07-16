// *REACT IMPORTS BELOW //
import { StyleSheet, Dimensions, StatusBar, Platform } from "react-native";

// *STYLE CODE BELOW //
const { height, width } = Dimensions.get('window');

//* THEME IMPORT//
import { COLORS } from "../../theme";

//* STYLES CODE//
const Android = Platform.OS === 'android';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.tertiary,
  },
});

export const AndroidView = StyleSheet.create({
  paddingTop: Android ? StatusBar.currentHeight : 0,
});
