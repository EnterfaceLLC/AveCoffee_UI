//* RN IMPORTS //
import { View, Text, TouchableOpacity, Image } from 'react-native';

//* RN NAVIGATION //
import { useNavigation } from '@react-navigation/native';

//* STYLES, THEME, ICON IMPORT //
import { styles } from '../styles/ProductCard';
import { COLORS } from '../../../theme';
import { Ionicons } from '@expo/vector-icons';

//* PRODUCT CARD COMPONENT //
const ProductCard = ({ prod }) => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Details', { prod })}>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={{ uri: prod.imageUrl }}
          />
        </View>

        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>{prod.title}</Text>
          <Text style={styles.brand} numberOfLines={1}>{prod.category}</Text>
          <Text style={styles.price}>${prod.price}</Text>
        </View>
        <TouchableOpacity style={styles.addBtn}>
          <Ionicons name='add-circle' size={35} color={COLORS.highlight} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
