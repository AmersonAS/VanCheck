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
import { MaterialIcons, Feather } from '@expo/vector-icons';
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { auth } from '../config/firebase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorLogin, setErrorLogin] = useState('');

  const [hidePass, setHidePass] = useState(true);

  const loginFirebase = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate('Home', { idUser: user.uid });
      })
      .catch((error) => {
        setErrorLogin(true);
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const handleForgotPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert('Lhe enviamos um email para a redefinição da sua senha');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  useEffect(() => {}, []);

  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'padding'}
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

      <View style={styles.inputView}>
          <View style={styles.inputArea}>
            <TextInput
              style={styles.textInputE}
              placeholder="E-mail"
              placeholderTextColor="#84848B"
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
          </View>

          <View style={styles.inputArea}>
            <TextInput
              style={styles.textInput}
              placeholder="Senha"
              placeholderTextColor="#84848B"
              autoCapitalize="none"
              secureTextEntry={hidePass} // Definir para true para ocultar a senha
              onChangeText={(text) => setPassword(text)} 
              value={password}
            />
            <TouchableOpacity style={styles.icon} onPress={() => setHidePass(!hidePass)}>
              {hidePass ?
                <Feather name="eye" size={20} color="#EEEEEE" />
                :
                <Feather name="eye-off" size={20} color="#EEEEEE" />
              }
            </TouchableOpacity>
          </View>

          {errorLogin === true ? (
            <View style={styles.contentAlert}>
              <MaterialIcons name="error" size={24} color="#E31144" />
              <Text style={styles.warningAlert}>E-mail ou senha inválidos!</Text>
            </View>
          ) : (
            <View />
          )}

          <TouchableOpacity onPress={handleForgotPassword}>
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

  inputView:{
    width: '60%',
  },

  inputArea:{
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 40,

    backgroundColor: '#1A1B28',
    borderWidth: 2,
    borderColor: '#EEEEEE',
    borderRadius: 14,
    
    marginBottom: 10,
  },

  textInputE: {
    color: 'white',
    width: '100%',
    height: '100%',
    paddingHorizontal: 5,
  },

  textInput: {
    color: 'white',
    width: '85%',
    height: '100%',
    paddingLeft: 5,
  },

  icon:{
    width: '15%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
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
    width: '100%',
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
