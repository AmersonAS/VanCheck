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
            <View
              style={styles.pontoEmbarque}
            >
              <Text>Ponto de embarque:</Text>
              <View>
                <Image/>
                <Text></Text>
                <Text style={styles.a}>Logradouro - N°</Text>
                <Text style={styles.a}>Bairro</Text>
                <Text style={styles.a}>Cidade - Estado</Text>
                <Text style={styles.a}>Horário</Text>
              </View>
            </View>
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
    backgroundColor: 'rgba(60, 60, 158, 0.3)',
    borderRadius: 14,
  },

  //--------------------------------------------------------------

  a: {
    color: '#eeeeee',
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