//* RN IMPORTS //
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

//* RN NAVIGATION IMPORT //
import { useNavigation } from '@react-navigation/native';

//* STYLES, THEME IMPORT //
import { styles } from '../styles/Welcome';
import { COLORS, SIZES } from '../../../theme';
import { Feather, Ionicons } from '@expo/vector-icons';

//* WELCOME COMPONENT CODE //
const Welcome = () => {

  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text(COLORS.black, SIZES.small)}>Crafting Perfection</Text>
        <Text style={styles.text(COLORS.tertiary, 0)}>in Every Brew</Text>
      </View>

      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Feather name='search' size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.input}
            placeholder='Search Our Brews'
            value=''
            onPressIn={() => navigation.navigate('Search')}
          />
        </View>

        <View>
          <TouchableOpacity style={styles.searchBtn}>
            <Ionicons name='camera-outline' size={SIZES.xLarge} color={COLORS.off_white} />
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
};

export default Welcome;
