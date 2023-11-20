import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { auth } from '../config/firebase';
import { useNavigation } from '@react-navigation/native';
import { signOut, deleteUser } from 'firebase/auth';

const Profile = () => {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState(null);
  const navigation = useNavigation();

  const handlePress = (opcao) => {
    setOpcaoSelecionada(opcao);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // Execute ações adicionais após o logout, se necessário
      alert('Você acaba de sair da sua conta');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Erro ao fazer logout:', error.message);
    }
  };

  const handleDeleteCurrentUser = () => {
    const user = auth.currentUser;

    if (user) {
      deleteUser(user)
        .then(() => {
          // Usuário excluído com sucesso
          alert('Sua conta foi excluída com sucesso');
          console.log('Usuário excluído com sucesso');
          navigation.navigate('Login');
        })
        .catch((error) => {
          // Ocorreu um erro ao excluir o usuário
          console.error('Erro ao excluir usuário:', error);
        });
    } else {
      // Nenhum usuário logado
      console.log('Nenhum usuário logado');
    }
  };

  return (
    <View>
      <Text>Opção Selecionada: {opcaoSelecionada}</Text>

      <TouchableOpacity style={styles.botao} onPress={handleLogout}>
        <Text style={styles.texto}>Logout</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={handleDeleteCurrentUser}>
        <Text style={styles.texto}>Excluir Conta</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  botao:{
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    width:100,
    height:30,
    margin: 30,
  },

  texto:{
    color: 'white',
  }
})

export default Profile;
