import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import { colors } from '../utils/colors';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
    <Image source={require("../assets/logo.png")} style={styles.logo}/>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:colors.white,
    },
    logo:{
      height: 40,
      width: 140,
    }
});
