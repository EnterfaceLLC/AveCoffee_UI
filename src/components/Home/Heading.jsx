//* RN IMPORTS //
import { View, Text, TouchableOpacity } from 'react-native';

//* RN NAVIGATION //
import { useNavigation } from '@react-navigation/native';

//* STYLES, THEME, ICON IMPORTS //
import { styles } from '../styles/Heading';
import { COLORS } from '../../../theme';
import { Fontisto } from '@expo/vector-icons';

//* HEADING COMPONENT CODE //
const Heading = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headText}>Explore Our Finest Brews</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Spotlight')}>
          <Fontisto name='coffeescript' size={24} color={COLORS.rating} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Heading;
