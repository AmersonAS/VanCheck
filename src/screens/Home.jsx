import {
  Image,
  Button,
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { firestore } from '../config/firebase';
import { auth } from '../config/firebase';
import { getDoc, doc } from 'firebase/firestore';
import { BlurView } from 'expo-blur';

export default function Home({ route }) {
  const [userName, setUserName] = useState('');
  const navigation = useNavigation();

  const irparaStep1 = () => {
    navigation.navigate('Step1');
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;

      if (user) {
        const uid = user.uid;
        const userDocRef = doc(firestore, 'users', uid);

        try {
          const userDocSnapshot = await getDoc(userDocRef);

          if (userDocSnapshot.exists()) {
            const userData = userDocSnapshot.data();
            setUserName(userData.name); // Ou qualquer outro campo que você queira exibir
          } else {
            console.log('Documento do usuário não encontrado');
          }
        } catch (error) {
          console.error('Erro ao obter dados do usuário:', error);
        }
      } else {
        console.log('Nenhum usuário logado');
      }
    };

    fetchUserData();
  }, []);

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.gradientBackground}
        colors={['#293A80', '#010038']}
        start={{ x: 0, y: 1.5 }}
        end={{ x: 0, y: -0.1 }}
      />

      <View style={styles.header}>
        <Image
          source={require('../../assets/Van-Check-Icon.png')}
          style={[styles.LogoImage, { width: 40, height: 40 }]}
        />
        <Text style={styles.TextPassageiro}>Passageiro | {userName} </Text>
      </View>

      <View style={styles.content}>
        <ImageBackground
          source={require('../../assets/BackImage-Home.png')}
          style={styles.backImage}
        >
          <View style={styles.transparentBar}>
            <BlurView
            style={styles.blurContainer}
            intensity={6}
            tint="default"
            >
              <Text style={styles.textViagens}>Viagens</Text>
            </BlurView>
          </View>

          <ScrollView style={{ width: '100%' }}>
            <View style={styles.ScrollTest}>{/*CONTEÚDO DA HOME*/}</View>
          </ScrollView>

          <TouchableOpacity style={styles.embarcarButton} onPress={irparaStep1}>
            <Text style={styles.buttonText}>Embarcar</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    paddingTop: '10%',
    paddingBottom: 12,
    alignItems: 'center',
    backgroundColor: '#1A1B28',
    width: '100%',
  },

  LogoImage: {
    marginBottom: 5,
  },

  TextPassageiro: {
    fontSize: 10,
    color: '#eeeeee',
  },

  content: {
    flex: 1,
  },

  gradientBackground: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },

  transparentBar: {
    height: '9%',
    width: '100%',
  },

  blurContainer: {
    flex: 1,
    borderBottomWidth: 0.25,
    borderColor: 'rgba(255, 255, 255, 0.05)',
    alignItems: 'center',
    padding: 15, 
  },

  textViagens: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  backImage: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  ScrollTest: {
    paddingTop: '3%',
    alignItems: 'center',
  },

  embarcarButton: {
    backgroundColor: '#F39422',
    width: 150,
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '24%',
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
