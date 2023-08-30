//* RN IMPORTS //
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import React, { useState, useEffect } from 'react';

//* RN NAVIGATION //
import { useNavigation } from '@react-navigation/native';

//* COMPONENT IMPORT//
import BackPress from '../components/BackPress';

//* STYLES IMPORT //
import { AndroidView, styles } from '../styles/Login';

//* LOGIN SCREEN CODE //
const Login = () => {

  const [loader, setLoader] = useState(false);
  const [response, setResponse] = useState(null);
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const navigation = useNavigation();

  return (
    <ScrollView>
      <SafeAreaView style={[AndroidView, { marginHorizontal: 20 }]}>
        <View>
          <BackPress onPress={() => navigation.goBack()} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Login;
