import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Image,
  ImageBackground
} from 'react-native';

import { Checkbox } from 'expo-checkbox';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { MaterialIcons } from '@expo/vector-icons';
import { auth } from '../config/firebase';
import { firestore } from '../config/firebase';
import { doc, setDoc, collection } from 'firebase/firestore';
import { TextInputMask } from 'react-native-masked-text';
import { LinearGradient } from 'expo-linear-gradient';

export default function Cadastro() {
  const navigation = useNavigation();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [errorRegister, setErrorRegister] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    userPass: '',
    userRePass: '',
    phoneNumber: '',
    birthDate: '',
  });

  const register = async () => {
    const {
      email,
      name,
      lastName,
      userPass,
      userRePass,
      phoneNumber,
      birthDate,
    } = formData;

    try {
      if (
        email === '' ||
        name === '' ||
        lastName === '' ||
        userPass === '' ||
        phoneNumber === '' ||
        birthDate === ''
      ) {
        throw new Error('Todos os campos devem ser preenchidos');
      }

      if (userPass !== userRePass) {
        throw new Error('A senha e a confirmação devem ser iguais');
      }

      if (!toggleCheckBox) {
        throw new Error(
          'É necessário aceitar os Termos de Uso e Política de Privacidade'
        );
      }

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        userPass
      );
      const user = userCredential.user;
      const userId = user.uid;

      // Atualize o perfil do usuário com o nome
      await updateProfile(auth.currentUser, {
        displayName: name,
      });

      // Adicione dados adicionais à coleção "users" no Firestore
      const usersCollection = collection(firestore, 'users');
      const userDocRef = doc(usersCollection, userId);

      const userData = {
        userId: userId,
        name: name,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        birthDate: birthDate,
      };

      await setDoc(userDocRef, userData);

      console.log('Dados do usuário salvos no Firestore');
      alert(`O usuário ${user.email} foi criado. Faça o Login`);
      navigation.navigate('Login', { idUser: user.uid });
    } catch (error) {
      setErrorRegister(true);
      console.error('Erro ao criar usuário:', error.message);
      alert(`Erro ao criar usuário: ${error.message}`);
    }
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <LinearGradient
        style={styles.gradientBackground}
        colors={['#293A80', '#010038']}
        start={{ x: 0, y: 1.5 }}
        end={{ x: 0, y: -0.1 }}
      />
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../../assets/BackImage-SignIn.png')}
      >
        <View style={styles.insideConteiner}>
          <View style={styles.title}>
            <Image
              style={styles.textDetails}
              source={require('../../assets/textDetails.png')}
            />
            <Text style={styles.TitleStep1}>Cadastro</Text>
          </View>

          <View 
            style={styles.formContainer}
          >
            <View 
              style={styles.rowInputContainer}
            >
              <TextInput
                style={styles.textInput}
                placeholder="Nome"
                placeholderTextColor="#84848B"
                onChangeText={(text) => setFormData({ ...formData, name: text })}
                value={formData.name}
              />

              <TextInput
                style={styles.textInput}
                placeholder="Sobrenome"
                placeholderTextColor="#84848B"
                onChangeText={(text) => setFormData({ ...formData, lastName: text })}
                value={formData.lastName}
              />
            </View>
            
            <View
              style={styles.inputConteiner}
            >
              <TextInput
                style={styles.textInputFull}
                placeholder="E-mail"
                placeholderTextColor="#84848B"
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
                onChangeText={(text) => setFormData({ ...formData, email: text })}
                value={formData.email}
              />
            </View>
            
            <View
              style={styles.inputConteiner}
            >
              <TextInput
                style={styles.textInputFull}
                keyboardType="default"
                placeholder="Senha"
                placeholderTextColor="#84848B"
                autoCapitalize="none"
                secureTextEntry={true}
                onChangeText={(text) => setFormData({ ...formData, userPass: text })}
                value={formData.userPass}
              />
            </View>

            <View
              style={styles.inputConteiner}
            >
              <TextInput
                style={styles.textInputFull}
                keyboardType="default"
                placeholder="Confirme a senha"
                placeholderTextColor="#84848B"
                autoCapitalize="none"
                secureTextEntry={true}
                onChangeText={(text) => setFormData({ ...formData, userRePass: text })}
                value={formData.userRePass}
              />

              

            <View 
              style={styles.rowInputContainer}
            >
              <TextInputMask
                style={styles.textInput}
                type="datetime"
                options={{
                  format: 'DD/MM/YYYY',
                }}
                keyboardType="numeric"
                placeholder="Nascimento"
                placeholderTextColor="#84848B"
                onChangeText={(date) => setFormData({ ...formData, birthDate: date })}
                value={formData.birthDate}
              />

              <TextInputMask
                style={styles.textInput}
                type="cel-phone"
                placeholder="Telefone"
                placeholderTextColor="#84848B"
                options={{
                  maskType: 'BRL',
                  withDDD: true,
                  dddMask: '(81) ',
                }}
                onChangeText={(number) =>
                  setFormData({ ...formData, phoneNumber: number })
                }
                value={formData.phoneNumber}
              />
            </View>
          </View>

          <View style={styles.checkboxConteiner}>
            <Checkbox
              style={styles.checkbox}
              color={'#191925'}
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
            <Text style={styles.textTerms}>
              Li e estou de acordo com os{' '}
              <Text style={styles.link}>
                Termos de Uso e Política de Privacidade
              </Text>
            </Text>
          </View>

          {errorRegister === true ? (
                <View style={styles.contentAlert}>
                  <MaterialIcons name="error" size={24} color="#E31144" />
                  <Text style={styles.warningAlert}>E-mail ou senha inválidos!</Text>
                </View>
              ) : (
                <View />
              )}
            </View>

          <TouchableOpacity
            style={styles.button}
            disabled={!formData.email || !formData.userPass}
            onPress={register}
          >
            <Text style={styles.textButton}>Cadastrar</Text>
          </TouchableOpacity>

          <View style={styles.textBottom}>
            <Text style={styles.beforeLink}>Já possui conta? </Text>
            <TouchableOpacity onPress={navigation.goBack}>
              <Text style={styles.link}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

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
    marginBottom: 20,
    left: '3%',
    width: '100%',
  },

  textDetails: {
    width: 15,
    height: 15,
  },

  TitleStep1: {
    color: '#eeeeee',
    fontWeight: 'bold',
    fontSize: 35,
  },

  //---------------------------------------------------------
  formContainer:{
    //backgroundColor: 'rgba(255,255,255,0.1)',
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },

  rowInputContainer:{
    width:'100%', //entendi foi nada
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 9,
  },

  inputConteiner:{
    width: '100%',
    marginTop: 9,
  },

  //---------------------------------------------------------
  textInput: {
    width: 145,
    height: 45,
    borderRadius: 14,
    borderWidth: 2,
    backgroundColor: '#1A1B28',
    borderColor: '#EEEEEE',
    padding: 10,
    color: 'white',
  },
  textInputFull: {
    width: 300,
    height: 45,
    borderRadius: 14,
    borderWidth: 2,
    backgroundColor: '#1A1B28',
    borderColor: '#EEEEEE',
    padding: 10,
    color: 'white',
  },

  //---------------------------------------------------------
  checkboxConteiner: {
    flexDirection: 'row',
    width: '100%',
    margin:35,
  },

  checkbox:{
    borderRadius: 6,
    marginRight: 10,
  },

  textTerms: {
    color: '#eee',
    fontSize: 14,
    flexWrap: 'wrap',
    flex: 1,
    fontWeight: 'bold',
  },
  link: {
    fontSize: 13,
    color: '#F39422',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },

  //---------------------------------------------------------
  

  button: {
    backgroundColor: '#F39422',
    width: 300,
    height: 45,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:20,
  },

  textButton: {
    fontSize: 15,
    color: '#eee',
    fontWeight: 'bold',
  },

  //---------------------------------------------------------

  textBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 45,
  },

  beforeLink: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#EEEEEE',
  },

  //---------------------------------------------------------

  contentAlert: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  warningAlert: {
    paddingLeft: 5,
    fontSize: 14,
    color: '#E31144',
  },
});
