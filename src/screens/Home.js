//* RN IMPORTS //
import { SafeAreaView, View, Text } from 'react-native';

//* STYLES IMPORT //
import { styles, AndroidView } from '../styles/Home';

//* HOME SCREEN CODE //
const Home = () => {
  return (
    <SafeAreaView style={[AndroidView, styles.container]}>
      <Text>Home Screen</Text>
    </SafeAreaView>
  );
};

export default Home;
