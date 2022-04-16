/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React,{useEffect} from 'react';
 import { SafeAreaView, StyleSheet, Text } from 'react-native';

 import Navigation from './src/navigation';
 import SplashScreen from 'react-native-splash-screen';
 
 const App = () => {
   useEffect(()=>{
    SplashScreen.hide();
   }, []);
   return (
     <SafeAreaView style={styles.back}>
       <Navigation />
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
 
   back: {
     flex: 1,
     backgroundColor: '#FFFFFF',
   },
   
 });
 
 export default App;
 