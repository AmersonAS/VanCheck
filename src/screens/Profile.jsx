import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
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

      <TouchableOpacity onPress={handleLogout}>
        <Text>Logout</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleDeleteCurrentUser}>
        <Text>Excluir Conta</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handlePress('Opção 3')}>
        <Text>Opção 3</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
