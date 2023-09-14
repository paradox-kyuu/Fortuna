import React, { useEffect } from 'react';
import { View, StyleSheet, Image} from 'react-native';


const LoadingScreen = ({ navigation }) => {
  useEffect(() => {
    // Simulate a loading delay (you can replace this with any async task)
    const timer = setTimeout(() => {
      navigation.replace('Login'); // Navigate to the login screen after the delay
    }, 3500); // Adjust the delay time as needed (e.g., 2000 milliseconds = 2 seconds)

    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, [navigation]);

  return (
    <View style={styles.container}>
  <Image source={require('../assets/logo_violet_gold_nobg.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2f3b52',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300, 
    height: 300,
  },
});
export default LoadingScreen;
