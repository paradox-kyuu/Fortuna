import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Modal, Image } from 'react-native';
import RegistrationForm from './RegistrationForm';
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegisteringStatus, setIsRegisteringStatus] = useState(false);
  const auth = FIREBASE_AUTH;

  const handleLogin = async () => {
    try{
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      navigation.navigate('Welcome');
    } catch (error){
      console.log(error);   
      
    }
    
  };

  return (
  <View style={styles.container}>
  <View style={styles.logoContainer}>
      <Image source={require('../assets/logo_violet_gold_nobg.png')} style={styles.logo} />
    </View>
  <View style={styles.inputView}>
    
    <TextInput
      style={styles.inputText}
      placeholder="Email"
      placeholderTextColor="#003f5c"
      onChangeText={(text) => setEmail(text)}
    />
  </View>
  <View style={styles.inputView}>
    <TextInput
      secureTextEntry
      style={styles.inputText}
      placeholder="Password"
      placeholderTextColor="#003f5c"
      onChangeText={(text) => setPassword(text)}
    />
  </View>
  <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
    <Text style={styles.loginText}>LOGIN</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => setIsRegisteringStatus(true)}>
    <Text style={styles.signupText}>Don't have an account? Sign up here </Text>
  </TouchableOpacity>

  <Modal animationType="slide" presentationStyle='fullScreen' statusBarTranslucent={true} transparent={false} visible={isRegisteringStatus}>
    <RegistrationForm
      offRegister={() => setIsRegisteringStatus(false)} 
      onLogin={() => setIsRegisteringStatus(false)} 
    />
  </Modal>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2f3b52',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 40,
    width: 300, 
    height: 300,
  },

  inputView: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: '#fcea74',
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#fcea74',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: '#003f5c',
    fontWeight: 'bold',
  },
  signupText: {
    color: '#7c7c7c',
  },
  
});