//* RN IMPORTS //
import { View, Image, Text, TouchableOpacity } from 'react-native';
import React from 'react';

//* RN NAVIGATION //
import { useNavigation } from '@react-navigation/native';

//* STYLES IMPORT//
import { styles } from '../styles/SearchList';

//* PRODUCT SEARCH LIST COMPONENT //
const SearchList = ({ prod }) => {

  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Details', { prod })}>
        <View style={styles.image}>
          <Image
            source={{ uri: prod.imageUrl }}
            style={styles.productImg}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{prod.title}</Text>
          <Text style={styles.category}>{prod.category}</Text>
          <Text style={styles.price}>${prod.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SearchList;
