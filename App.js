import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';

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
    <View style={styles.container}>
      <Text style={styles.text}>Avenue Coffee Co.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'bellota_regular',
    fontSize: 40
  }
});
