//* RN IMPORTS //
import { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

//* RN NAVIGATION //
import { useNavigation } from '@react-navigation/native';

//* STYLES, THEME, ICON IMPORT //
import { styles } from '../styles/ProductDetails';
import { COLORS } from '../../theme';
import { Ionicons, MaterialCommunityIcons, SimpleLineIcons, Fontisto } from '@expo/vector-icons';

//* PRODUCT DETAILS SCREEN //
const ProdDetails = () => {

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
        source={{
          uri:
            'https://res.cloudinary.com/lmr-media/image/upload/v1689589809/Ave%20Coffee%20Co/pexels-valeriia-miller-3020919_lquqtz.jpg'
        }}
      />
      <View style={styles.detailContainer}>
        <View style={styles.titleBar}>
          <Text style={styles.title}>Expresso Bliss'</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>$ 8.99</Text>
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
            Immerse yourself in the refined indulgence of our Espresso Coffee hot beverage, meticulously handcrafted from the finest Arabica coffee beans. Each sip unveils a harmonious symphony of robust flavors, crowned by a velvety crema that dances on the palate.
          </Text>
        </View>

        <View style={styles.locationContain}>
          <View style={styles.location}>
            <View style={styles.locationGrp}>
              <Ionicons name='location-outline' size={20} />
              <Text>Topeka, Ks</Text>
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
