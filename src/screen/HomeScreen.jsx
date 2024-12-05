import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../utils/colors';
import {fonts} from '../utils/fonts';

const HomeScreen = () => {
  const navigation = useNavigation();
  const handlelogin = () => {
    navigation.navigate('LOGIN');
  };
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Image source={require('../assets/man.png')} style={styles.bannerImage} />
      <Text style={styles.title}>my first app</Text>
      <Text style={styles.subtitle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        optio, voluptas incidunt architecto adipisci eius
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.loginButtonWrapper,
            {
              backgroundColor: colors.primary,
            },
          ]}
          onPress={handlelogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButtonWrapper}>
          <Text style={styles.siginButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  logo: {
    height: 40,
    width: 140,
    marginVertical: 30,
  },
  bannerImage: {
    height: 250,
    width: 231,
    marginVertical: 20,
  },
  title: {
    fontSize: 36,
    fontFamily: fonts.SemiBold,
    paddingHorizontal: 20,
    textAlign: 'center',
    color: colors.primary,
    marginTop: 40,
  },
  subtitle: {
    fontSize: 20,
    paddingHorizontal: 20,
    textAlign: 'center',
    color: colors.secondary,
    fontFamily: fonts.Medium,
    marginVertical: 30,
  },
  buttonContainer: {
    marginTop: 40,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: colors.primary,
    width: '80%',
    height: 60,
    borderRadius: 100,
  },
  loginButtonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    borderRadius: 90,
  },
  loginButtonText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: fonts.SemiBold,
  },
  siginButtonText: {
    fontSize: 18,
    fontFamily: fonts.SemiBold,
  },
});
