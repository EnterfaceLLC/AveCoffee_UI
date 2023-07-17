//* RN IMPORTS //
import { View, Text, TouchableOpacity } from 'react-native';

//* STYLES, THEME, ICON IMPORTS //
import { styles } from '../styles/Heading';
import { COLORS } from '../../../theme';
import { Fontisto } from '@expo/vector-icons';

//* HEADING COMPONENT CODE //
const Heading = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headText}>Our Finest Brews</Text>
        <TouchableOpacity>
          <Fontisto name='coffeescript' size={24} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Heading;
