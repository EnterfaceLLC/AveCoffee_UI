//* RN NAVIGATION IMPORT //
import { NavigationContainer } from '@react-navigation/native';

//* RN STACK IMPORT //
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//* STACK CONST //
const Stack = createNativeStackNavigator();

//* BOTTOM NAVIGATION IMPORT //
import BottomNav from './BottomNav';

//* SCREEN IMPORTS //
import { Cart, ProdDetails, Spotlight, Login } from '../screens';

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

        <Stack.Screen
          name='Cart'
          component={Cart}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name='Details'
          component={ProdDetails}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name='Spotlight'
          component={Spotlight}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name='Login'
          component={Login}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNav;
