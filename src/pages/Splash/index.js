// eslint-disable-next-line import/no-extraneous-dependencies
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import logoImg from '../../assets/img/logo/logo.png';

export default function Splash() {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.containerLogo}>
        <Image
          style={styles.logo}
          source={logoImg}
        />
      </View>
      <View style={styles.containerText}>
        <Text style={styles.text}>
          Seja bem-vindo ao Localiza Bus
        </Text>
        <Text style={styles.text}>
          novo aplicativo de localização
        </Text>
        <Text style={[styles.text, styles.textBold]}>
          de pontos de ônibus na sua cidade
        </Text>
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity
          onPress={() => navigation.replace('Root')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Começar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  logo: {
    width: 173,
    height: 160,
  },
  containerText: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  containerButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderColor: '#2BB647',
    borderWidth: 1,
    textAlign: 'center',
    padding: 10,
    color: '#fff',
    backgroundColor: '#00283B',
    width: 260,
    borderRadius: 9,
    height: 50,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  text: {
    color: '#fff',
    fontSize: 14,
  },
  textBold: {
    fontWeight: 'bold',
  },
});
