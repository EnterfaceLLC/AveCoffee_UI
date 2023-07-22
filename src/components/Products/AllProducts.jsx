//* RN IMPORTS //
import { View, Text, ActivityIndicator, FlatList } from 'react-native';

//* CUSTOM HOOK IMPORT //
import useFetch from '../../hook/useFetch';

//* COMPONENT IMPORT //
import ProductCard from './ProductCard';

//* STYLES, THEME IMPORT //
import { styles } from '../styles/AllProducts';
import { COLORS, SIZES } from '../../../theme';

//* All PRODUCTS COMPONENT //
const AllProducts = () => {

  const { data, loading, error } = useFetch();

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      </View>
    );
  }


  return (
    <View style={styles.flexContainer}>
      <FlatList
        data={data}
        renderItem={({ item }) => (<ProductCard prod={item} />)}
        numColumns={2}
        contentContainerStyle={styles.container}
      // ItemSeparatorComponent={() => <View style={styles.grid} />}
      />
    </View>
  );
};

export default AllProducts;
