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
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

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
        start={{ x: 0, y: 1.5 }}
        end={{ x: 0, y: -0.1 }}
      />

      <ImageBackground
        style={styles.backgroundImage}
        source={require('../../assets/Steps/BackImage-Step5.png')}
      />
      
            <View style={styles.confirmed}>
            <Animatable.View 
                animation="bounceIn"
                duration={1200}
              >
                <Ionicons
                    color={'#F39422'}
                    name="checkmark-circle-outline"
                    size={300} 
                />
              </Animatable.View>

              <Text>Viagem Marcada</Text>
            </View>

        <TouchableOpacity style={styles.ConfirmButton} onPress={irparaHome}>
          <Text style={styles.buttonText}>OK!</Text>
        </TouchableOpacity>
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

  //--------------------------------------------------------------
  ConfirmButton: {
    backgroundColor: '#F39422',
    borderRadius: 15,
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
  confirmed:{
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  }
});
