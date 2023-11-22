import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  ImageBackground,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Step5() {
  const [pressed, setPressed] = useState(false);

  const handlePress = () => {
    setPressed(!pressed);
  };

  const navigation = useNavigation();

  const irparaHome = () => {
    navigation.navigate('Home');
  };

  const startAnimation = () => {
    checkAnimation.current?.bounceIn(800);
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
        source={require('../../assets/Steps/BackImage-Step5.png')}
      >

{/*----------------------------------------------------------------------------------------------------------------------*/}
      
        <View style={styles.confirmed}>
          <Animatable.View 
            animation="bounceIn"
            duration={1200}
          >
            <MaterialCommunityIcons name="check-decagram" size={190} color="#F39422" style={{margin:20}}/>
          </Animatable.View>

          <Text style={styles.text}>Viagem marcada!</Text>
        </View>

{/*----------------------------------------------------------------------------------------------------------------------*/}

        <TouchableOpacity style={styles.ConfirmButton} onPress={irparaHome}>
          <Text style={styles.buttonText}>OK</Text>
        </TouchableOpacity>

{/*----------------------------------------------------------------------------------------------------------------------*/}

      </ImageBackground>
    </View>
  );
  }

//----------------------------------------------------------------
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

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  //--------------------------------------------------------------

  confirmed:{
    justifyContent: 'center',
    alignItems: 'center',
  },

  text:{
    color: '#eeeeee',
    fontWeight: 'bold',
    fontSize: 25,

    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
  

  //--------------------------------------------------------------
  ConfirmButton: {
    backgroundColor: '#F39422',
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

  buttonText: {
    color: '#eeeeee',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
