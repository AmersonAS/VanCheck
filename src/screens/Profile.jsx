import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { auth } from '../config/firebase';
import { useNavigation } from '@react-navigation/native';
import { signOut, deleteUser } from 'firebase/auth';

const Profile = () => {
  const navigation = useNavigation();

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
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../../assets/Steps/BackImage-Step5.png')}
      >
        <View>
          <View style={styles.header}>
            <Text>Perfil</Text>
            <TouchableOpacity style={styles.editImage}>
              <Image style={{width:100, height:100}} source={require('../../assets/ImageUser.png')}/>
            </TouchableOpacity>
          </View>

          <View style={styles.content}>
            <LinearGradient
              style={styles.gradientBackground}
              colors={['#293A80', '#010038']}
              start={{ x: 0, y: 1.5 }}
              end={{ x: 0, y: -0.1 }}
            />
{/*----------------------------------------------------------------------------------------------------------------------*/}

            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>Senha</Text>
            </TouchableOpacity>
{/*----------------------------------------------------------------------------------------------------------------------*/}

            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>E-mail</Text>
            </TouchableOpacity>
{/*----------------------------------------------------------------------------------------------------------------------*/}

            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>Contato</Text>
            </TouchableOpacity>
{/*----------------------------------------------------------------------------------------------------------------------*/}

            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>Notificações</Text>
            </TouchableOpacity>
{/*----------------------------------------------------------------------------------------------------------------------*/}

            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>Contate-nos</Text>
            </TouchableOpacity>
{/*----------------------------------------------------------------------------------------------------------------------*/}

            <TouchableOpacity style={styles.button} onPress={handleLogout}>
              <Text style={styles.REDtextButton}>Sair da conta</Text>
            </TouchableOpacity>
{/*----------------------------------------------------------------------------------------------------------------------*/}

            <TouchableOpacity style={styles.button} onPress={handleDeleteCurrentUser}>
              <Text style={styles.REDtextButton}>Excluir Conta</Text>
            </TouchableOpacity>
{/*----------------------------------------------------------------------------------------------------------------------*/}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#1A1B28',
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  //--------------------------------------------------------------
  header:{
    backgroundColor: 'rgba(60, 60, 158, 0.3)',
  }, 

  content:{
    backgroundColor: 'rgba(60, 60, 158, 0.6)',
    width: '100%',
    alignItems: 'center',
  },

  gradientBackground: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  //--------------------------------------------------------------

  button: {
    width: 380,
    height: 60,
    backgroundColor: 'rgba(60, 60, 158, 0.3)',
    borderRadius: 14,
    marginBottom: 20,

    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',

    paddingHorizontal: 20,
    alignItems: 'left',
    justifyContent: 'center',
  },

  textButton:{
    color: 'white',
    fontSize: 17,
  },

  REDtextButton:{
    color: '#E31144',
    fontSize: 17,
    fontWeight: 'bold',
  }
})

export default Profile;
