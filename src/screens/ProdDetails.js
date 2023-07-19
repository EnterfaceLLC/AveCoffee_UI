//* RN IMPORTS //
import { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

//* RN NAVIGATION //
import { useNavigation, useRoute } from '@react-navigation/native';

//* STYLES, THEME, ICON IMPORT //
import { styles } from '../styles/ProductDetails';
import { COLORS } from '../../theme';
import { Ionicons, MaterialCommunityIcons, SimpleLineIcons, Fontisto } from '@expo/vector-icons';

//* PRODUCT DETAILS SCREEN //
const ProdDetails = () => {

  const route = useRoute();
  const { prod } = route.params;
  // console.log('Route Params:', prod);

  const navigation = useNavigation();

  const [qty, setQty] = useState(1);

  const increase = () => {
    setQty(qty + 1);
  };

  const decrease = () => {
    if (qty > 1) {
      setQty(qty - 1)
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name='chevron-back-circle' size={36} color={COLORS.black} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { }}>
          <Ionicons name='heart' size={36} color={COLORS.highlight} />
        </TouchableOpacity>
      </View>

      <Image
        style={styles.img}
        source={{ uri: prod.imageUrl }}
      />
      <View style={styles.detailContainer}>
        <View style={styles.titleBar}>
          <Text style={styles.title}>{prod.title}</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>$ {prod.price}</Text>
          </View>
        </View>

        <View style={styles.ratingBar}>
          <View style={styles.rating}>
            {
              [1, 2, 3, 4].map((index) => (
                <MaterialCommunityIcons
                  key={index}
                  name='coffee'
                  size={24}
                  color={COLORS.rating}
                />
              ))
            }
            <Text>...(4.9)</Text>
          </View>

          <View style={styles.rating}>
            <TouchableOpacity onPress={() => increase()}>
              <SimpleLineIcons name='plus' size={30} />
            </TouchableOpacity>
            <Text style={styles.qtyText}>{qty}</Text>
            <TouchableOpacity onPress={() => decrease()}>
              <SimpleLineIcons name='minus' size={30} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.descWrapper}>
          <Text style={styles.descTitle}>How Its Made</Text>
          <Text style={styles.descText}>
            {prod.description}
          </Text>
        </View>

        <View style={styles.locationContain}>
          <View style={styles.location}>
            <View style={styles.locationGrp}>
              <Ionicons name='location-outline' size={20} />
              <Text>{prod.product_location}</Text>
            </View>
            <View style={styles.locationGrp}>
              <Ionicons name='card-outline' size={20} />
              <Text style={{ marginLeft: 5 }}>Pick-up</Text>
            </View>
          </View>
        </View>

        <View style={styles.cartBar}>
          <TouchableOpacity style={styles.buyNowBtn} onPress={() => { }}>
            <Text style={styles.cartText}>Buy Now</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cartBtn} onPress={() => { }}>
            <Fontisto name='shopping-bag' size={20} color={COLORS.primary} />
          </TouchableOpacity>

        </View>

      </View>
    </View>
  )
}

export default ProdDetails;
