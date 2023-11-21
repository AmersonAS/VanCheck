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

export default function Step3() {
  const [pressed, setPressed] = useState(false);

  const handlePress = () => {
    setPressed(!pressed);
  };

  const navigation = useNavigation();

  const irparaStep4 = () => {
    navigation.navigate('Step4');
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

              <TouchableOpacity
                onPress={handlePress}
                activeOpacity={0.9}
                style={[styles.option, pressed && styles.activiOption]}
              >
                  <View style={styles.NamePoint}>
                    <Text style={styles.PointText}>BADU</Text>
                  </View>

                  <View style={styles.AddressPoint}>
                    <View style={styles.aAlign}>
                      <Text style={styles.a}>Logradouro</Text>
                      <Text style={styles.a}> - </Text>
                      <Text style={styles.a}>N°</Text>
                    </View>
                    <Text style={styles.a}>Bairro</Text>
                    <Text style={styles.a}>Cidade - Estado</Text>
                    <Text style={styles.a}>Horário</Text>
                  </View>
              </TouchableOpacity>

{/*----------------------------------------------------------------------------------------------------------------------*/}

              <TouchableOpacity
                onPress={handlePress}
                activeOpacity={0.9}
                style={[styles.option, pressed && styles.activiOption]}
              >
                  <View style={styles.NamePoint}>
                    <Text style={styles.PointText}>AABB</Text>
                  </View>

                  <View style={styles.AddressPoint}>
                    <View style={styles.aAlign}>
                      <Text style={styles.a}>Logradouro</Text>
                      <Text style={styles.a}> - </Text>
                      <Text style={styles.a}>N°</Text>
                    </View>
                    <Text style={styles.a}>Bairro</Text>
                    <Text style={styles.a}>Cidade - Estado</Text>
                    <Text style={styles.a}>Horário</Text>
                  </View>
              </TouchableOpacity>

{/*----------------------------------------------------------------------------------------------------------------------*/}

              <TouchableOpacity
                onPress={handlePress}
                activeOpacity={0.9}
                style={[styles.option, pressed && styles.activiOption]}
              >
                  <View style={styles.NamePoint}>
                    <Text style={styles.PointText}>CONVENIÊNCIA</Text>
                  </View>

                  <View style={styles.AddressPoint}>
                    <View style={styles.aAlign}>
                      <Text style={styles.a}>Logradouro</Text>
                      <Text style={styles.a}> - </Text>
                      <Text style={styles.a}>N°</Text>
                    </View>
                    <Text style={styles.a}>Bairro</Text>
                    <Text style={styles.a}>Cidade - Estado</Text>
                    <Text style={styles.a}>Horário</Text>
                  </View>
              </TouchableOpacity>

{/*----------------------------------------------------------------------------------------------------------------------*/}

              <TouchableOpacity
                onPress={handlePress}
                activeOpacity={0.9}
                style={[
                  styles.option, 
                  pressed && styles.activiOption
                ]}
              >
                  <View style={styles.NamePoint}>
                    <Text style={styles.PointText}>SÃO DOMINGOS</Text>
                  </View>

                  <View style={styles.AddressPoint}>
                    <View style={styles.aAlign}>
                      <Text style={styles.a}>Logradouro</Text>
                      <Text style={styles.a}> - </Text>
                      <Text style={styles.a}>N°</Text>
                    </View>
                    <Text style={styles.a}>Bairro</Text>
                    <Text style={styles.a}>Cidade - Estado</Text>
                    <Text style={styles.a}>Horário</Text>
                  </View>
              </TouchableOpacity>

{/*----------------------------------------------------------------------------------------------------------------------*/}

            </View>
          </ScrollView>

          <View 
            style={styles.buttonsBackNext}
          >
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

  option: {
    width: 330,
    height: 155,
    backgroundColor: 'rgba(36, 36, 85, 0.6)',
    borderRadius: 14,
    marginBottom: 30,

    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',

    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 20,
  },

  activiOption: {
    width: 330,
    height: 155,
    backgroundColor: 'rgba(36, 36, 85, 0.6)',
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

  aAlign: {
    flexDirection: 'row',
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
    borderRadius: 15,
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
});
