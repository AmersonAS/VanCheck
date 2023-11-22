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


export default function Step3() {
  const [pressed, setPressed] = useState(false);

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
  
          <View
            style={styles.infoContainer}
          >

{/*----------------------------------------------------------------------------------------------------------------------*/}

            <View
              style={styles.viewDasInfo}
            >
              <Text
                style={{color: '#eeeeee', fontSize: 13,}}
              >Ponto de embarque:</Text>
              <View style={styles.infoEmbarque}>
                <Image style={{width: 18, height: 18, marginRight: '2%', margin: 6,}}  source={require('../../assets/Steps/Room.png')}/>

                <View>
                  <Text style={styles.aTitle}>BADU</Text>
                  <Text style={styles.a}>Av. Pref. Braz de Lira</Text>
                  <Text style={styles.a}>Malaquias Cardoso</Text>
                  <Text style={styles.a}>Santa Cruz do Capibaribe - PE</Text>
                  <Text style={styles.a}>17:40</Text>
                </View>
              </View>
            </View>

{/*----------------------------------------------------------------------------------------------------------------------*/}

            <View
              style={styles.viewDasInfo}
            >
              <Text
                style={{color: '#eeeeee', fontSize: 13,}}
              >Viagem:</Text>
              <View style={styles.infoVaiVolta}>
                <Image style={{width: 18, height: 18, marginRight: '2%', margin: 6,}}  source={require('../../assets/Steps/Arrow_GoBackOrange.png')}/>
                <Text style={styles.aTitle}>Vai e volta</Text>
              </View>
            </View>

{/*----------------------------------------------------------------------------------------------------------------------*/}

            <View
              style={styles.viewDasInfo}
            >
              <Text
                style={{color: '#eeeeee', fontSize: 13,}}
              >Ponto de desembarque:</Text>
              <View style={styles.infoVaiVolta}>
                <Image style={{width: 18, height: 18, marginRight: '2%', margin: 6,}}  source={require('../../assets/Steps/Room.png')}/>
                <Text style={styles.aTitle}>Unifavip Wyden</Text>
              </View>
            </View>

{/*----------------------------------------------------------------------------------------------------------------------*/}

          </View>
          
          <View 
            style={styles.buttonsBackConfirm}
          >
            <TouchableOpacity style={styles.BackButton} onPress={voltar}>
              <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ConfirmButton} onPress={irparaStep5}>
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
   infoContainer: {
    flex: 1,

    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',

    width: 380,
    padding: 20,
    backgroundColor: 'rgba(60, 60, 158, 0.3)',
    borderRadius: 14,
  },

  //--------------------------------------------------------------
  viewDasInfo:{
    paddingBottom: 20,
    marginBottom: 20,

    borderBottomWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },

  //--------------------------------------------------------------

  infoEmbarque:{
    flexDirection: 'row',

    marginHorizontal: 20,
  },

  infoVaiVolta:{
    flexDirection: 'row',
    alignItems: 'center',

    marginHorizontal: 20,
  },

  

  //--------------------------------------------------------------
  aTitle:{
    color: '#F39422',
    fontSize: 23,
    fontWeight: 'bold',
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