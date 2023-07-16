//* EXPO IMPORTS //
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

//* RN IMPORT //
import { useCallback } from 'react';

//* ROOT NAVIGATION IMPORT //
import RootNav from './src/util/RootNav';

//* APP CODE //
export default function App() {

  const [fontsLoaded] = useFonts({
    advent_light: require('./assets/fonts/AdventPro-Light.ttf'),
    advent_regular: require('./assets/fonts/AdventPro-Regular.ttf'),
    bellota_light: require('./assets/fonts/BellotaText-Light.ttf'),
    bellota_regular: require('./assets/fonts/BellotaText-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  };

  return (
    <RootNav />
  );
};
