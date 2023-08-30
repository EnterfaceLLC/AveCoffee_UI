//* RN IMPORTS //
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';

//* RN NAVIGATION //
import { useNavigation } from '@react-navigation/native';

//* EXPO IMPORTS //
import { StatusBar } from 'expo-status-bar';

//* STYLES, THEME IMPORT //
import { styles, AndroidView } from '../styles/Profile';
import { AntDesign, MaterialCommunityIcons, SimpleLineIcons, Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../theme';

//* PROFILE SCREEN CODE //
const Profile = () => {

  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(false);

  const navigation = useNavigation();

  const clearData = () => {
    Alert.alert(
      "Clear Data",
      "Are you sure you want to clear saved account data?",
      [
        { text: "Cancel", onPress: () => console.log("Canceled") },
        { text: "OK", onPress: () => console.log("Data deleted") },
        // { defaultIndex: 1 }
      ]
    )
  };

  const deleteAccount = () => {
    Alert.alert(
      "Delete Account",
      "Are you sure you want to DELETE account?",
      [
        { text: "Cancel", onPress: () => console.log("Canceled") },
        { text: "OK", onPress: () => console.log("Deleted Account!") },
        // { defaultIndex: 1 }
      ]
    )
  };

  const logout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to log out?",
      [
        { text: "Cancel", onPress: () => console.log("Canceled") },
        { text: "OK", onPress: () => console.log("Logged Out") },
        // { defaultIndex: 1 }
      ]
    )
  };

  const avatar = 'https://res.cloudinary.com/lmr-media/image/upload/v1682765753/.Enterface/JRZ_Profile_wrxhcf.jpg';

  const cover = 'https://res.cloudinary.com/lmr-media/image/upload/v1689561788/Ave%20Coffee%20Co/pexels-igor-haritanovich-1695052_lhnq7u.jpg';

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        {/* <StatusBar backgroundColor={COLORS.grey} /> */}

        <View style={styles.cover}>
          {/* <Image
            source={{ uri: cover }}
            style={styles.cover}
          /> */}
        </View>
        <View style={styles.avatarContainer}>
          <Image
            source={{ uri: cover }}
            style={styles.avatar}
          />
          <Text style={styles.name}>{userLogin === true ? "Enterface, LLC" : "Please Login"}</Text>
          {
            userLogin === false ? (
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <View style={styles.loginBtn}>
                  <Text style={styles.loginTxt}>Login</Text>
                </View>
              </TouchableOpacity>
            ) : (
              <View style={styles.userInfo}>
                <Text style={styles.infoTxt}>dotEnterface@gmail.com</Text>
              </View>
            )
          }

          {
            userLogin === false ? (
              <View></View>
            ) : (
              <View style={styles.menuContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
                  <View style={styles.menuItem(.5)}>
                    <MaterialCommunityIcons
                      name='heart-outline'
                      color={COLORS.rating}
                      size={24}
                    />
                    <Text style={styles.menuTxt}>Favorites</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Orders')}>
                  <View style={styles.menuItem(.5)}>
                    <Ionicons
                      name='receipt-outline'
                      color={COLORS.rating}
                      size={24}
                    />
                    <Text style={styles.menuTxt}>Orders</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                  <View style={styles.menuItem(.5)}>
                    <SimpleLineIcons
                      name='bag'
                      color={COLORS.rating}
                      size={24}
                    />
                    <Text style={styles.menuTxt}>Cart</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => clearData()}>
                  <View style={styles.menuItem(.5)}>
                    <MaterialCommunityIcons
                      name='cached'
                      color={COLORS.rating}
                      size={24}
                    />
                    <Text style={styles.menuTxt}>Clear Content</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => deleteAccount()}>
                  <View style={styles.menuItem(.5)}>
                    <AntDesign
                      name='deleteuser'
                      color={COLORS.rating}
                      size={24}
                    />
                    <Text style={styles.menuTxt}>Delete Account</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => logout()}>
                  <View style={styles.menuItem(.5)}>
                    <MaterialCommunityIcons
                      name='logout'
                      color={COLORS.rating}
                      size={24}
                    />
                    <Text style={styles.menuTxt}>Logout</Text>
                  </View>
                </TouchableOpacity>

              </View>
            )
          }
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
