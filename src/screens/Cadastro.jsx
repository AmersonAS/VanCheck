import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
} from 'react-native';

import { Checkbox } from 'expo-checkbox';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { auth } from '../config/firebase';
import { firestore } from '../config/firebase';
import { doc, setDoc, collection } from 'firebase/firestore';
import { TextInputMask } from 'react-native-masked-text';

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
    <KeyboardAvoidingView style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Nome"
        onChangeText={(text) => setFormData({ ...formData, name: text })}
        value={formData.name}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Sobrenome"
        onChangeText={(text) => setFormData({ ...formData, lastName: text })}
        value={formData.lastName}
      />
      <TextInput
        style={styles.textInputFull}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
        onChangeText={(text) => setFormData({ ...formData, email: text })}
        value={formData.email}
      />
      <TextInput
        style={styles.textInputFull}
        keyboardType="default"
        placeholder="Senha"
        autoCapitalize="none"
        secureTextEntry={true}
        onChangeText={(text) => setFormData({ ...formData, userPass: text })}
        value={formData.userPass}
      />

      <TextInput
        style={styles.textInputFull}
        keyboardType="default"
        placeholder="Confirme a senha"
        autoCapitalize="none"
        secureTextEntry={true}
        onChangeText={(text) => setFormData({ ...formData, userRePass: text })}
        value={formData.userRePass}
      />

      {errorRegister === true ? (
        <View style={styles.contentAlert}>
          <MaterialCommunityIcons
            name="alert-circle"
            size={24}
            color="#bdbdbd"
          />
          <Text style={styles.warningAlert}>e-mail ou senha inválidos</Text>
        </View>
      ) : (
        <View />
      )}

      <TextInputMask
        style={styles.textInput}
        type="datetime"
        options={{
          format: 'DD/MM/YYYY',
        }}
        keyboardType="numeric"
        placeholder="Nascimento"
        onChangeText={(date) => setFormData({ ...formData, birthDate: date })}
        value={formData.birthDate}
      />
      <TextInputMask
        style={styles.textInput}
        keyboardType="phone-pad"
        type="cel-phone"
        placeholder="Telefone"
        options={{
          maskType: 'BRL',
          withDDD: true,
          dddMask: '(81) ',
        }}
        onChangeText={(number) =>
          setFormData({ ...formData, phoneNumber: number })
        }
      />

      <View style={styles.checkBox}>
        <Checkbox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        />

        <Text style={styles.textBottom}>
          Li e estou de acordo com os{' '}
          <Text style={styles.link}>
            Termos de Uso e Política de Privacidade
          </Text>
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        disabled={!formData.email || !formData.userPass}
        onPress={register}
      >
        <Text>Cadastrar</Text>
      </TouchableOpacity>

      <Text style={styles.textBottom}>
        Já possui conta?
        <Text style={styles.link} onPress={navigation.goBack}>
          {' '}
          Entre!
        </Text>
      </Text>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    backgroundColor: '#010038',
    justifyContent: 'center',
    gap: 10,
    paddingTop: 300,
  },
  textInput: {
    width: 145,
    height: 40,
    borderWidth: 2,
    backgroundColor: 'grey',
    borderColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
  textInputFull: {
    width: 300,
    height: 40,
    borderWidth: 2,
    backgroundColor: 'grey',
    borderColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
  text: {
    color: 'white',
    fontSize: 12,
    marginBottom: 15,
    marginRight: 120,
    marginTop: 5,
  },
  button: {
    backgroundColor: '#F39422',
    width: 250,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: -40,
  },
  textBottom: {
    color: 'white',
    fontSize: 12,
    marginBottom: 15,
  },
  link: {
    color: '#F39422',
    textDecorationLine: 'underline',
  },
  checkBox: {
    padding: 35,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -20,
  },
  contentAlert: {
    // marginLeft: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  warningAlert: {
    paddingLeft: 5,
    fontSize: 12,
    color: '#F39422',
  },
});
