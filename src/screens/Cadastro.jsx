import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Checkbox } from 'expo-checkbox';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Cadastro() {
  const navigation = useNavigation();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} placeholder="Nome" />
      <TextInput style={styles.textInput} placeholder="Sobrenome" />
      <TextInput style={styles.textInputFull} placeholder="Email" />
      <TextInput
        style={styles.textInputFull}
        keyboardType="numeric"
        placeholder="Senha"
      />
      <TextInput
        style={styles.textInputFull}
        keyboardType="numeric"
        placeholder="Confirme a senha"
      />
      <TextInput
        style={styles.textInput}
        keyboardType="numeric"
        placeholder="Nascimento"
      />
      <TextInput
        style={styles.textInput}
        keyboardType="numeric"
        placeholder="Telefone"
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

      <TouchableOpacity style={styles.button}>
        <Text>Cadastrar</Text>
      </TouchableOpacity>

      <Text style={styles.textBottom}>
        Já possui conta?
        <Text style={styles.link} onPress={navigation.goBack}>
          {' '}
          Entre!
        </Text>
      </Text>
    </View>
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
});
