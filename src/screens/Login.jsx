import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import app from '../config/firebase';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default function Login() {
  //const database = firebase.firestore()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorLogin, setErrorLogin] = useState('');

  const loginFirebase = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log();
        //navigation.navigate('Home, {idUser: user.uid})
        // ...
      })
      .catch((error) => {
        setErrorLogin(true);
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  useEffect(() => {}, []);

  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <LinearGradient
        style={styles.gradientBackground}
        colors={['#293A80', '#010038']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      ></LinearGradient>

      <Image
        style={styles.Logo}
        source={require('../../assets/Van-Check-Icon.png')}
      />

      <View style={styles.formContainer}>
        <View>
          <TextInput
            style={styles.textInput}
            placeholder="E-mail"
            placeholderTextColor="#84848B"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Senha"
            placeholderTextColor="#84848B"
            secureTextEntry={true} // Definir para true para ocultar a senha
            onChangeText={(text) => setPassword(text)}
            value={password}
          />

          {errorLogin === true ? (
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

          <TouchableOpacity>
            <Text style={styles.text}>Esqueceu sua senha?</Text>
          </TouchableOpacity>

          {email === '' || password === '' ? (
            <TouchableOpacity style={styles.button} disabled={true}>
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.button} onPress={loginFirebase}>
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View style={styles.textBottom}>
        <Text style={styles.beforeLink}>Não possui conta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.link}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
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

  Logo: {
    marginTop: '20%',
    marginBottom: 10,
    width: 110,
    height: 110,
  },

  textInput: {
    width: 265,
    height: 45,
    borderWidth: 2,
    backgroundColor: '#1A1B28',
    borderColor: '#EEEEEE',
    borderRadius: 14,
    padding: 10,
    marginTop: 10,
    marginBottom: 3,
    color: 'white',
  },
  text: {
    textDecorationLine: 'underline',
    color: 'white',
    fontSize: 12,
    marginLeft: 10,
    marginBottom: 15,
    marginRight: 120,
    marginTop: 5,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#F39422',
    width: 265,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
  },

  textBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '30%',
    marginBottom: 15,
  },

  beforeLink: {
    color: '#EEEEEE',
  },

  link: {
    textDecorationLine: 'underline',
    color: '#F39422',
  },

  contentAlert: {
    // marginLeft: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  warningAlert: {
    paddingLeft: 5,
    fontSize: 14,
    color: '#F39422',
  },
});
