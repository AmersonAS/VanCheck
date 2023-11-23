import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  ImageBackground,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useTripContext } from '../config/Trip';

export default function Step4() {
  const { state } = useTripContext();
  const [pressed, setPressed] = useState(false);
  const {
    tripType,
    college,
    boardingPoint,
    logradouro,
    bairro,
    cidade,
    estado,
    horario,
    numero,
  } = state.selectedOptions;
  console.log('Estado atual do contexto:', state.selectedOptions);
  const handlePress = () => {
    setPressed(!pressed);
  };

  const navigation = useNavigation();

  const irparaStep5 = () => {
    navigation.navigate('Step5');
  };

  const voltar = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.gradientBackground}
        colors={['#293A80', '#010038']}
        start={{ x: 0, y: -0.1 }}
        end={{ x: 0, y: 1.3 }}
      />

      <ImageBackground
        style={styles.backgroundImage}
        source={require('../../assets/Steps/BackImage-Step4.png')}
      >
        <View style={styles.insideConteiner}>
          <View style={styles.title}>
            <Text style={styles.bTitleStep3}>Revise </Text>
            <Text style={styles.TitleStep3}>as informações</Text>
          </View>

          <View style={styles.box}>
            <View style={styles.infoBox}>
              <View style={styles.informacoes}>
                <Text style={{ color: '#eeeeee', fontSize: 13 }}>
                  Ponto de embarque:
                </Text>
                <View style={styles.infoEmbarque}>
                  <Image
                    style={styles.aImage}
                    source={require('../../assets/Steps/Room.png')}
                  />

                  <View>
                    <Text style={styles.aTitle}>{boardingPoint}</Text>
                    <Text style={styles.a}>{logradouro}</Text>
                    <Text style={styles.a}>{bairro}</Text>
                    <Text style={styles.a}>{`${cidade} - ${estado}`}</Text>
                    <Text style={styles.a}>{horario}</Text>
                  </View>
                </View>
              </View>

              {/*----------------------------------------------------------------------------------------------------------------------*/}

              <View style={styles.informacoes}>
                <Text style={{ color: '#eeeeee', fontSize: 13 }}>Viagem:</Text>
                <View style={styles.infoVaiVolta_Desembarque}>
                  <Image
                    style={styles.aImage}
                    source={require('../../assets/Steps/Arrow_GoBackOrange.png')}
                  />
                  <Text style={styles.aTitle}>{tripType}</Text>
                </View>
              </View>

              {/*----------------------------------------------------------------------------------------------------------------------*/}

              <View style={styles.uInformacoes}>
                <Text style={{ color: '#eeeeee', fontSize: 13 }}>
                  Ponto de desembarque:
                </Text>
                <View style={styles.infoVaiVolta_Desembarque}>
                  <Image
                    style={styles.aImage}
                    source={require('../../assets/Steps/Room.png')}
                  />
                  <Text style={styles.aTitle}>{college}</Text>
                </View>
              </View>

              {/*----------------------------------------------------------------------------------------------------------------------*/}
            </View>

            <View style={styles.imageBox}>
              <Image
                style={{ width: 100, height: 100 }}
                source={require('../../assets/Van-Check-Icon.png')}
              />
            </View>
          </View>

          <View style={styles.buttonsBackConfirm}>
            <TouchableOpacity style={styles.BackButton} onPress={voltar}>
              <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.ConfirmButton}
              onPress={irparaStep5}
            >
              <Text style={styles.buttonText}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

//----------------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  insideConteiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
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

  //--------------------------------------------------------------
  title: {
    flexDirection: 'row',
    marginTop: 65,
    marginBottom: 50,
    justifyContent: 'center',
    width: '100%',
  },

  bTitleStep3: {
    color: '#eeeeee',
    fontWeight: 'regular',
    fontSize: 35,
    fontWeight: 'bold',
  },

  TitleStep3: {
    color: '#eeeeee',
    fontWeight: 'regular',
    fontSize: 35,
    fontWeight: 'regular',
  },

  //--------------------------------------------------------------
  box: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',

    width: '90%',
    padding: 20,
    backgroundColor: 'rgba(60, 60, 158, 0.3)',
    borderRadius: 14,

    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },

  infoBox: {
    width: '100%',
  },

  imageBox: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },

  //--------------------------------------------------------------
  informacoes: {
    paddingBottom: 20,
    marginBottom: 20,

    borderBottomWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },

  uInformacoes: {
    paddingBottom: 20,
    marginBottom: 20,
  },

  //--------------------------------------------------------------

  infoEmbarque: {
    flexDirection: 'row',

    marginHorizontal: 20,
  },

  infoVaiVolta_Desembarque: {
    flexDirection: 'row',
    alignItems: 'center',

    marginHorizontal: 20,
  },

  //--------------------------------------------------------------
  aImage: {
    width: 18,
    height: 18,
    marginRight: '2%',
    margin: 6,
  },

  aTitle: {
    color: '#F39422',
    fontSize: 23,
    fontWeight: 'bold',

    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },

  a: {
    color: '#eeeeee',
    fontSize: 13,
    fontWeight: 'regular',
  },

  //--------------------------------------------------------------
  buttonsBackConfirm: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 50,
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

  ConfirmButton: {
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
