//* RN IMPORTS //
import { View, Text, TouchableOpacity, Image } from 'react-native';

//* RN NAVIGATION //
import { useNavigation } from '@react-navigation/native';

//* STYLES, THEME, ICON IMPORT //
import { styles } from '../styles/ProductCard';
import { COLORS } from '../../../theme';
import { Ionicons } from '@expo/vector-icons';

//* PRODUCT CARD COMPONENT //
const ProductCard = (prods) => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Details')}>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={{ uri: 'https://res.cloudinary.com/lmr-media/image/upload/v1689589809/Ave%20Coffee%20Co/pexels-valeriia-miller-3020919_lquqtz.jpg' }}
          />
        </View>

        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>Expresso Bliss</Text>
          <Text style={styles.brand} numberOfLines={1}>Hot Brew</Text>
          <Text style={styles.price}>$8.99</Text>
        </View>
        <TouchableOpacity style={styles.addBtn}>
          <Ionicons name='add-circle' size={35} color={COLORS.highlight} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
