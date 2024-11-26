import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
    <Image source={require("../assets/logo.png")} style={styles.logo}/>
    <Image source={require("../assets/man.png")} style={styles.bannerImage}/>
   <Text style={styles.title} >Lorem, ipsum dolor </Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:colors.white,
      alignItems: 'center',
    },
    logo:{
      height: 40,
      width: 140,
     marginVertical: 30,
    },
    bannerImage: {
      height: 250,
      width: 231,
      marginVertical: 20,
    },
    title:{
      fontSize: 36,
      fontFamily: fonts.Regular,
      paddingHorizontal:  20,
      textAlign: 'center',
      color: colors.primary,
      marginTop: 40,
    },
});
