import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Platform,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { selectionOptions, selectionOptions2, selectionOptions3 } from './data';
import { collection, addDoc } from 'firebase/firestore';
import { firestore, auth } from '../config/firebase';
import { useTripContext } from '../config/Trip';

export default function Step3({ route }) {
  const { state, setOption } = useTripContext();
  const { tripType } = route.params;
  const [pressed, setPressed] = useState(null);

  const handlePress = (optionId) => {
    setPressed(optionId);
  };

  const navigation = useNavigation();

  const irparaStep4 = async () => {
    if (pressed !== null) {
      const selectedOption =
        selectionOptions3.find((opt) => opt.id === pressed) || {};

      // Atualize o contexto com a escolha do usuário
      setOption('boardingPoint', selectedOption.ponto || '');
      setOption('logradouro', selectedOption.logradouro || '');
      setOption('bairro', selectedOption.bairro || '');
      setOption('cidade', selectedOption.cidade || '');
      setOption('estado', selectedOption.estado || '');
      setOption('horario', selectedOption.horario || '');
      setOption('numero', selectedOption.numero || '');

      //ent~ç Certifique-se de que state.selectedOptions está definido
      const selectedOptions = state.selectedOptions || {};

      // Cria uma referência à coleção de escolhas de viagem
      const tripChoicesCollection = collection(firestore, 'trips');

      // Cria um documento para a escolha do usuário
      await addDoc(tripChoicesCollection, {
        userId: auth.currentUser.uid,
        tripType: selectedOptions.tripType || '',
        college: selectedOptions.college || '',
        boardingPoint: selectedOptions.boardingPoint || '',
        logradouro: selectedOptions.logradouro || '',
        bairro: selectedOptions.bairro || '',
        cidade: selectedOptions.cidade || '',
        estado: selectedOptions.estado || '',
        horario: selectedOptions.horario || '',
        numero: selectedOptions.numero || '',
        // Adicione outros campos conforme necessário
      });

      console.log('Escolha de viagem salva no Firestore');

      // Passa a escolha para Step4 através da navegação
      navigation.navigate('Step4');
    } else {
      alert('Uma escolha deve ser feita');
    }
  };

  const voltar = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.gradientBackground}
        colors={['#293A80', '#010038']}
        start={{ x: 0, y: 1.5 }}
        end={{ x: 0, y: -0.1 }}
      />

      <ImageBackground
        style={styles.backgroundImage}
        source={require('../../assets/Steps/BackImage-Step3.png')}
      >
        <View style={styles.insideConteiner}>
          <View style={styles.title}>
            <Image
              style={styles.textDetails}
              source={require('../../assets/textDetails.png')}
            />
            <Text style={styles.TitleStep3}>Ponto de embarque</Text>
          </View>

          <ScrollView style={{ marginTop: '10%', width: '100%' }}>
            <View style={styles.StepButtons}>
              {/*----------------------------------------------------------------------------------------------------------------------*/}
              <View>
                {selectionOptions3.map((option) => {
                  return (
                    <TouchableOpacity
                      key={option.id}
                      onPress={() => handlePress(option.id)}
                      activeOpacity={0.9}
                      style={[
                        styles.buttonOption,
                        pressed === option.id && styles.activiOption,
                      ]}
                    >
                      <View style={styles.NamePoint}>
                        <Text style={styles.PointText}>{option.ponto}</Text>
                      </View>

                      <View>
                        <Text
                          style={styles.a}
                        >{`${option.logradouro} - N°${option.numero}`}</Text>
                        <Text style={styles.a}>{option.bairro}</Text>
                        <Text
                          style={styles.a}
                        >{`${option.cidade} - ${option.estado}`}</Text>
                        <Text style={styles.a}>{option.horario}</Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
              {/*----------------------------------------------------------------------------------------------------------------------*/}
            </View>
          </ScrollView>

          <View style={styles.buttonsBackNext}>
            <TouchableOpacity style={styles.BackButton} onPress={voltar}>
              <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.NextButton} onPress={irparaStep4}>
              <Text style={styles.buttonText}>Próximo</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

//-------------------BACKGROUND---------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  insideConteiner: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
  },

  gradientBackground: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  //-------------------TITLE--------------------------------------
  title: {
    flexDirection: 'row',
    marginTop: 65,
    left: '3%',
    width: '100%',
  },

  textDetails: {
    width: 15,
    height: 15,
  },

  TitleStep3: {
    color: '#eeeeee',
    fontWeight: 'regular',
    fontSize: 35,
    fontWeight: 'bold',
  },

  //-------------------BUTTONS------------------------------------
  StepButtons: {
    alignItems: 'center',
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

  activiOption: {
    width: 330,
    height: 155,
    backgroundColor: 'rgba(60, 60, 158, 0.3)',
    borderRadius: 14,
    marginBottom: 30,

    borderWidth: 1.5,
    borderColor: '#F39422',

    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 20,
  },

  PointText: {
    marginBottom: 5,
    fontWeight: 'bold',
    color: '#eeeeee',
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

  //-------------------BACK-AND-NEXT-BUTTONS----------------------
  buttonsBackNext: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 20,
  },

  BackButton: {
    backgroundColor: '#1A1B28',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '5%',
    width: 145,
    height: 50,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
      },
      android: {
        elevation: 5,
      },
    }),
  },

  NextButton: {
    backgroundColor: '#F39422',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '5%',
    marginLeft: 30,
    width: 145,
    height: 50,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
      },
      android: {
        elevation: 5,
      },
    }),
  },

  buttonText: {
    color: '#eeeeee',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
