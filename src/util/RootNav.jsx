//* RN NAVIGATION IMPORT //
import { NavigationContainer } from '@react-navigation/native';

//* RN STACK IMPORT //
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//* STACK CONST //
const Stack = createNativeStackNavigator();

//* BOTTOM NAVIGATION IMPORT //
import BottomNav from './BottomNav';

//* ROOT NAVIGATION CODE //
const RootNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Bottom Nav'
          component={BottomNav}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNav;
