//* RN IMPORTS //
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, TextInput, FlatList, Image } from 'react-native';
import { useState } from 'react';

//* AXIOS IMPORT //
import axios from 'axios';

//* COMPONENT IMPORT //
import { SearchList } from '../components';

//* STYLES, THEME, ICON IMPORT //
import { styles, AndroidView } from '../styles/ProdSearch';
import { COLORS, SIZES } from '../../theme';
import { Feather, Ionicons } from '@expo/vector-icons';

//* PRODUCT SEARCH SCREEN //
const ProdSearch = () => {

  const [searchKey, setSearchKey] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://192.168.0.187:5000/api/v1/products/search/${searchKey}`);
      setSearchResults(response.data);
      console.log(response);

    } catch (error) {
      console.log("Failed to search products", error);
    }
  };

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
            value={searchKey}
            onChangeText={setSearchKey}
          />
        </View>

        <View>
          <TouchableOpacity style={styles.searchBtn} onPress={() => handleSearch()} >
            <Feather name='search' size={24} color={COLORS.off_white} />
          </TouchableOpacity>
        </View>
      </View>

      {
        searchResults.length === 0 ? (
          <View style={styles.resultContain}>
            {/* <View style={styles.textContainer}>
              <Text style={styles.searchText}>Explore our</Text>
              <Text style={styles.searchText}>Creations...</Text>
            </View> */}
            <Image
              source={require('../../assets/search.jpg')}
              style={styles.searchImg}
            />
          </View>
        ) : (
          <FlatList
            data={searchResults}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (<SearchList prod={item} />)}
            style={{ marginHorizontal: 12 }}
          />
        )
      }

    </SafeAreaView >
  );
};

export default ProdSearch;
