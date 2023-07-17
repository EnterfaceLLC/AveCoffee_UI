//* RN IMPORTS //
import { SafeAreaView, View, Text, TouchableOpacity, TextInput } from 'react-native';

//* STYLES, THEME, ICON IMPORT //
import { styles, AndroidView } from '../styles/ProdSearch';
import { COLORS, SIZES } from '../../theme';
import { Feather, Ionicons } from '@expo/vector-icons';

//* PRODUCT SEARCH SCREEN //
const ProdSearch = () => {
  return (
    <SafeAreaView style={[AndroidView, styles.container]}>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons name='camera-outline' size={SIZES.xLarge} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.input}
            placeholder='Search Our Brews'
            value=''
            onPressIn={() => { }}
          />
        </View>

        <View>
          <TouchableOpacity style={styles.searchBtn}>
            <Feather name='search' size={24} color={COLORS.off_white} />
          </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView >
  );
};

export default ProdSearch;
