//* RN IMPORTS //
import { FlatList, View, Text, ActivityIndicator } from 'react-native';

//* CUSTOM HOOKS IMPORT //
import useFetch from '../../hook/useFetch';

//* COMPONENT IMPORT //
import ProductCard from './ProductCard';

//* STYLES, THEME IMPORT //
import { styles } from '../styles/ProductList';
import { SIZES } from '../../../theme';

//* PRODUCT LIST COMPONENT //
const ProductList = () => {

  const { data, loading, error } = useFetch();
  // console.log('Response Data:', data);

  return (
    <View style={styles.container}>
      {
        loading ? (
          <ActivityIndicator size={SIZES.xLarge} />
        ) : error ? (
          <Text>Something Went Wrong!</Text>
        ) : (
          <FlatList
            data={data}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (<ProductCard prod={item} />)}
            contentContainerStyle={styles.list}
            horizontal
          />
        )
      }
    </View>
  );
};

export default ProductList;
