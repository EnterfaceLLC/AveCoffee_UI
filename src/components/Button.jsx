//* RN IMPORTS //
import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

//* STYLES IMPORT //
import { styles } from './styles/Button';

//* BUTTON COMPONENT //
const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.btnContnr}
      onPress={null}
    >
      <Text style={styles.btnTxt}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
