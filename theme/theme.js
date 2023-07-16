//* RN IMPORT //
import { Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window');

const COLORS = {
  primary: "#BF4342", //* Bittersweet Shimmer //
  secondary: "#E7D7C1", //* Almond //
  tertiary: "#A78A7F", //* Beaver //
  alternate: "#735751", //* Liver //
  highlight: "#8C1C13", //* Dark Red //

  grey: "#83829A",
  grey2: "#C1C0C8",

  lightWhite: "#FAFAFC",
  off_white: "#F3F4F8",
  white: "#FFFFFF",
  black: "#000000",
  error: "#e81e4d",
  success: " #00C135",
};


const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 44,
  height,
  width
};


const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};


export { COLORS, SIZES, SHADOWS };
