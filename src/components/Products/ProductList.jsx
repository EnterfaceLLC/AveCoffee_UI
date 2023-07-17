//* RN IMPORTS //
import { FlatList, View } from 'react-native';

//* STYLES IMPORT //
import { styles } from '../styles/ProductList';
import ProductCard from './ProductCard';

//* PRODUCT LIST COMPONENT //
const ProductList = () => {

  const products = [
    1, 2, 3, 4, 5
  ]

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => (<ProductCard prods={item} />)}
        contentContainerStyle={styles.list}
        horizontal
      />
    </View>
  );
};

export default ProductList;
