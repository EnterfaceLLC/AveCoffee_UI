//* RN IMPORTS //
import { SafeAreaView, View, Text, } from 'react-native';

//* STYLES IMPORT //
import { styles, AndroidView } from '../styles/ProdSearch';

//* PRODUCT SEARCH SCREEN CODE //
const ProdSearch = () => {
  return (
    <SafeAreaView style={[AndroidView, styles.container]}>
      <Text>ProdSearch</Text>
    </SafeAreaView>
  );
};

export default ProdSearch;
