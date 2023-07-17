//* RN IMPORTS //
import { SafeAreaView, View, Text, TouchableOpacity, ScrollView } from 'react-native';

//* STYLES, THEME, ICON IMPORT //
import { styles, AndroidView } from '../styles/Home';
import { COLORS } from '../../theme';
import { Ionicons, Fontisto } from '@expo/vector-icons';

//* COMPONENT IMPORTS //
import { Welcome } from '../components';
import Carousel from '../components/Home/Carousel';
import Heading from '../components/Home/Heading';
import ProductList from '../components/Products/ProductList';

//* HOME SCREEN //
const Home = () => {
  return (
    <SafeAreaView style={AndroidView}>
      <View style={styles.container}>
        <View style={styles.headBar}>
          <Ionicons name='location-outline' size={24} color={COLORS.primary} />
          <Text style={styles.location}>Topeka, KS</Text>

          <View style={styles.qtyContainer}>
            <View style={styles.cartQty}>
              <Text style={styles.qty}>7</Text>
            </View>
            <TouchableOpacity>
              <Fontisto name='shopping-bag' size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView>
        <Welcome />
        <Carousel />
        <Heading />
        <ProductList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
