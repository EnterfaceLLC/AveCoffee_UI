//* RN IMPORTS //
import { SafeAreaView, View, Text } from 'react-native';

//* STYLES IMPORT //
import { styles, AndroidView } from '../styles/Profile';

//* PROFILE SCREEN CODE //
const Profile = () => {
  return (
    <SafeAreaView style={[AndroidView, styles.container]}>
      <Text>Profile</Text>
    </SafeAreaView>
  );
};

export default Profile;
