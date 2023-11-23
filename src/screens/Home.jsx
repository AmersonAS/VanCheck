import {
  Image,
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
import { firestore, auth } from '../config/firebase';
import { getDoc, doc } from 'firebase/firestore';
import { useTripContext } from '../config/Trip';

export default function Home() {
  const navigation = useNavigation();
  const { state } = useTripContext();

  const [userName, setUserName] = useState('');

  const { tripChosen } = state;
  const { boardingPoint, logradouro, bairro, cidade, estado, horario } =
    state.selectedOptions;

  const irparaStep1 = () => {
    navigation.navigate('Step1');
  };

  const handleRemoveTrip = () => {
    // Lógica para remover a viagem
    setOption('tripChosen', false);
    // Lógica adicional se necessário
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
            setUserName(`${userData.name} ${userData.lastName}`);
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
            <Text style={styles.textViagens}>Viagens</Text>
          </View>

          <ScrollView style={{ width: '100%' }}>
            <View style={styles.ScrollTest}>
              {tripChosen && (
                <TouchableOpacity
                  activeOpacity={0.9}
                  style={styles.buttonOption}
                >
                  <View style={styles.NamePoint}>
                    <Text style={styles.PointText}>{boardingPoint}</Text>
                  </View>

                  <View>
                    <Text style={styles.a}>{logradouro}</Text>
                    <Text style={styles.a}>{bairro}</Text>
                    <Text style={styles.a}>{`${cidade} - ${estado}`}</Text>
                    <Text style={styles.a}>{horario}</Text>
                  </View>
                </TouchableOpacity>
              )}
            </View>
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

  gradientBackground: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },

  //---------------------------------------------------------

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

  //---------------------------------------------------------

  content: {
    flex: 1,
  },

  //---------------------------------------------------------

  backImage: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  //---------------------------------------------------------

  transparentBar: {
    borderBottomWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',

    backgroundColor: 'rgba(60, 60, 158, 0.3)',
    alignItems: 'center',
    padding: 15,
    width: '100%',
  },

  textViagens: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  //---------------------------------------------------------

  ScrollTest: {
    paddingTop: '3%',
    alignItems: 'center',
  },

  //---------------------------------------------------------

  embarcarButton: {
    backgroundColor: '#F39422',
    width: 150,
    height: 50,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '24%',
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  PointText: {
    marginBottom: 5,
    fontWeight: 'bold',
    color: '#F39422',
    fontSize: 20,
    borderEndWidth: 1,
    borderEndColor: '#eeeeee',
  },

  NamePoint: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
    marginBottom: 5,
  },

  a: {
    color: '#eeeeee',
    fontWeight: 'regular',
  },
  buttonOption: {
    width: 330,
    height: 155,
    backgroundColor: 'rgba(60, 60, 158, 0.3)',
    borderRadius: 14,
    marginBottom: 30,

    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',

    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 20,
  },
});
