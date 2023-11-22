import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Platform,
  ImageBackground,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function Step2() {
  const [pressed, setPressed] = useState(false);

  const handlePress = () => {
    setPressed(!pressed);
  };

  const navigation = useNavigation();

  const irparaStep3 = () => {
    navigation.navigate('Step3');
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
        source={require('../../assets/Steps/BackImage-Step2.png')}
      >
        <View style={styles.insideConteiner}>
          <View style={styles.title}>
            <Image
              style={styles.textDetails}
              source={require('../../assets/textDetails.png')}
            />
            <Text style={styles.TitleStep2}>Onde vamos?</Text>
          </View>

          <View style={styles.StepButtons}>

{/*----------------------------------------------------------------------------------------------------------------------*/}
            <TouchableOpacity
              onPress={handlePress}
              style={[
                styles.option, 
                pressed && styles.activiOption
              ]}
            >
                  <Image
                    style={styles.Imagess}
                    source={require('../../assets/Steps/FavipImage.png')}
                  />
                  <Text style={styles.optionButtonsText}>Unifavip Wyden</Text>
            </TouchableOpacity>

{/*----------------------------------------------------------------------------------------------------------------------*/}

            <TouchableOpacity
              onPress={handlePress}
              style={[
                styles.option,
                pressed && styles.activiOption
              ]}
            >
                <Image
                  style={styles.Imagess}
                  source={require('../../assets/Steps/NassauImage.png')}
                />
                <Text style={styles.optionButtonsText}>Uninassau</Text>
            </TouchableOpacity>

{/*----------------------------------------------------------------------------------------------------------------------*/}

            <TouchableOpacity
              onPress={handlePress}
              style={[
                styles.option,
                pressed && styles.activiOption,
              ]}
            >
                <Image
                  style={styles.Imagess}
                  source={require('../../assets/Steps/AscesImage.png')}
                />
                <Text style={styles.optionButtonsText}>Asces Unita</Text>
            </TouchableOpacity>

{/*----------------------------------------------------------------------------------------------------------------------*/}

          </View>

          <View style={styles.buttonsBackNext}>
            <TouchableOpacity style={styles.BackButton} onPress={voltar}>
              <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.NextButton} onPress={irparaStep3}>
              <Text style={styles.buttonText}>Próximo</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

//---------------------------------------------------------
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
  //---------------------------------------------------------
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

  TitleStep2: {
    color: '#eeeeee',
    fontWeight: 'bold',
    fontSize: 35,
  },

  //---------------------------------------------------------
  StepButtons: {
    alignItems: 'center',
  },
  
  option: {
    width: 330,
    height: 80,
    backgroundColor: 'rgba(60, 60, 158, 0.3)',
    borderRadius: 14,
    marginBottom: 30,

    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',

    paddingHorizontal: 60,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  activiOption: {
    width: 330,
    height: 80,
    backgroundColor: 'rgba(60, 60, 158, 0.3)',
    borderRadius: 14,
    marginBottom: 30,

    borderWidth: 1.5,
    borderColor: '#F39422',

    paddingHorizontal: 60,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  Imagess: {
    width: 40,
    height: 40,
  },

  optionButtonsText: {
    color: '#eeeeee',
    fontSize: 20,
    fontWeight: 'bold',
  },

  //---------------------------------------------------------
  buttonsBackNext: {
    justifyContent: 'center',
    flexDirection: 'row',
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