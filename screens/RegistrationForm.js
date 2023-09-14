import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { FIREBASE_AUTH } from "../FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";


const RegistrationForm = ({ offRegister, onLogin }) => { // Updated function parameters
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = FIREBASE_AUTH;

  const handleRegistration = async () => {
    try {
      try{
        const response = await createUserWithEmailAndPassword(auth, email, password);
        console.log(response);
        offRegister(); // Close the registration modal
      } catch (error){
        console.log(error);   
      
      }
      
      
      
      
    } catch (error) {
      console.error('Error registering:', error);
    }
  };
  return (
    <View style={styles.modalContainer}>

      <Text style={styles.logoRegistration}>FORTUNA</Text>
      <View style={styles.modalView}>
      <Text style={styles.modalText}>REGISTER</Text>
        <View style={styles.modalInputView}>
          <TextInput
            style={styles.modalInputText}
            placeholder="Email"
            placeholderTextColor="#003f5c"
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.modalInputView}>
          <TextInput
            secureTextEntry
            style={styles.modalInputText}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={styles.modalButtonsContainer}>
          <TouchableOpacity style={styles.modalButton} onPress={handleRegistration}>
            <Text style={styles.modalButtonText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalButton} onPress={onLogin}>
            <Text style={styles.modalButtonText}>Already have an account?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: '#f8f8f8',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },

      logoRegistration: {
        fontWeight: 'bold',
        fontSize: 50,
        color: '#003f5c',
        marginBottom:20,
        
      },
      modalText: {
       
        marginBottom: 20, 
        fontSize: 18, 
        fontWeight: 'bold',
        color: '#003f5c',
      },
      modalView: {
    
        borderRadius: 25, 
        padding: 30,
        alignItems: 'left',
        width: '90%',
      
      },
  
      modalInputView: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 20,
      },
      modalInputText: {
        height: 50,
        color: 'black',
      },
      modalButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        width: '100%', 
       
        
      },
      modalButton: {
        backgroundColor: '#003f5c',
        borderRadius: 25,
        height: 27,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: '47%',
      },
      modalButtonText: {
        color: 'white',
        fontSize: 9
      },
}); 


export default RegistrationForm;