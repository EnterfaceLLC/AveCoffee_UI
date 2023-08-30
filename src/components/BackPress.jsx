//* RN IMPORTS //
import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

//* THEME, ICON IMPORTS //
import { COLORS } from '../../theme';
import { Ionicons } from '@expo/vector-icons';

//* BACK PRESS COMPONENT //
const BackPress = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons name='chevron-back-circle' size={50} color={COLORS.rating} />
    </TouchableOpacity>
  );
};

export default BackPress;
