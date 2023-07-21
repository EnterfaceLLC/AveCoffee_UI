//* RN BOTTOM TAB IMPORT //
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//* TAB CONST //
const Tab = createBottomTabNavigator();

//* THEME, ICON IMPORTS //
import { COLORS } from '../../theme/index';
import { Ionicons } from '@expo/vector-icons';

//* SCREEN IMPORTS //
import { Home, ProdSearch, Profile } from '../screens';

//* SCREEN OPTION CONST //
const screenOptions = {
  tabBarShowLabel: false,
  tabBarHideKeyboard: true,
  headerShown: false,
  tabBarStyle: {
    backgroundColor: COLORS.off_white,
  },
  // tabBarStyle: {
  //   position: 'absolute',
  //   bottom: 0,
  //   right: 0,
  //   left: 0,
  //   elevation: 0,
  //   height: 70
  // }
}

//* BOTTOM TAB CODE //
const BottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={screenOptions}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (<Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={24}
              color={focused ? COLORS.primary : COLORS.grey2}
            />)
          }
        }}
      />

      <Tab.Screen
        name='Search'
        component={ProdSearch}
        options={{
          tabBarIcon: ({ focused }) => {
            return (<Ionicons
              name={'search'}
              size={24}
              color={focused ? COLORS.primary : COLORS.grey2}
            />)
          }
        }}
      />

      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (<Ionicons
              name={focused ? 'person' : 'person-outline'}
              size={24}
              color={focused ? COLORS.primary : COLORS.grey2}
            />)
          }
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;
