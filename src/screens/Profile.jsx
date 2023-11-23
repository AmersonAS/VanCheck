import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { auth } from '../config/firebase';
import { useNavigation } from '@react-navigation/native';
import { signOut, deleteUser } from 'firebase/auth';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

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
        <View style={styles.header}>
          <Text style={styles.headerText}>Perfil</Text>
          <TouchableOpacity style={styles.editImage}>
            <Image
              style={{ width: 120, height: 120 }}
              source={require('../../assets/ImageUser.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <LinearGradient
            style={styles.gradientBackground}
            colors={['#293A80', '#010038']}
            start={{ x: 0, y: -0.1 }}
            end={{ x: 0, y: 1.5 }}
          />
          <View style={styles.user}>
            <Text style={styles.textUser}>Nome Sobrenome</Text>
          </View>

          <View style={styles.buttonConteiner}>
            <TouchableOpacity style={styles.button}>
              <MaterialCommunityIcons
                name="lock"
                size={20}
                color="#eeeeee"
                style={{ marginRight: 10 }}
              />
              <Text style={styles.textButton}>Senha</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <MaterialCommunityIcons
                name="email"
                size={20}
                color="#eeeeee"
                style={{ marginRight: 10 }}
              />
              <Text style={styles.textButton}>E-mail</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <MaterialCommunityIcons
                name="phone"
                size={20}
                color="#eeeeee"
                style={{ marginRight: 10 }}
              />
              <Text style={styles.textButton}>Contato</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <MaterialCommunityIcons
                name="bell"
                size={20}
                color="#eeeeee"
                style={{ marginRight: 10 }}
              />
              <Text style={styles.textButton}>Notificações</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <MaterialCommunityIcons
                name="contacts"
                size={20}
                color="#eeeeee"
                style={{ marginRight: 10 }}
              />
              <Text style={styles.textButton}>Contate-nos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleLogout}>
              <MaterialCommunityIcons
                name="logout-variant"
                size={20}
                color="#E31144"
                style={{ marginRight: 10 }}
              />
              <Text style={styles.REDtextButton}>Sair da conta</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={handleDeleteCurrentUser}
            >
              <AntDesign
                name="delete"
                size={20}
                color="#E31144"
                style={{ marginRight: 10 }}
              />
              <Text style={styles.REDtextButton}>Excluir Conta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1B28',
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  //--------------------------------------------------------------

  header: {
    //backgroundColor: 'rgba(60, 60, 158, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop: 18,
  },

  headerText: {
    color: '#eeeeee',
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 3,
  },
  //--------------------------------------------------------------

  content: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },

  gradientBackground: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  //--------------------------------------------------------------
  user: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
    marginBottom: 15,

    borderBottomWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.4)',
  },

  textUser: {
    color: '#eee',
    fontSize: 25,
    fontWeight: 'bold',
  },
  //--------------------------------------------------------------
  buttonConteiner: {
    flex: 1,
    width: '100%',
    marginBottom: '25%',

    alignItems: 'center',
    justifyContent: 'space-between',
  },

  button: {
    width: '80%',
    height: '11.7%',
    backgroundColor: 'rgba(60, 60, 158, 0.3)',
    borderRadius: 14,

    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',

    paddingHorizontal: 20,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  textButton: {
    color: '#eee',
    fontSize: 17,
  },

  REDtextButton: {
    color: '#E31144',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default Profile;
