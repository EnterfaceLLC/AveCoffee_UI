//* RN IMPORTS //
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';

//* RN NAVIGATION //
import { useNavigation } from '@react-navigation/native';


//* STYLES, THEME, ICON IMPORT //
import { AndroidView, styles } from '../styles/Spotlight';
import { COLORS } from '../../theme';
import { Ionicons } from '@expo/vector-icons';

import AllProducts from '../components/Products/AllProducts';

//* SPOTLIGHT SCREEN //
const Spotlight = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={[AndroidView, styles.container]}>
      <View style={styles.wrapper}>

        <View style={styles.upperBar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name='chevron-back-circle' size={30} color={COLORS.off_white} style={styles.back} />
          </TouchableOpacity>
          <Text style={styles.barText}>Our Creations</Text>
        </View>

        <AllProducts />
      </View>
    </SafeAreaView>
  );
};

export default Spotlight;
