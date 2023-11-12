
import { Image, Button, StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Login() {
  return (
    <View style={styles.container}>
      <LinearGradient style={styles.gradientBackground}
        colors={['#293A80', '#010038']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}>
      </LinearGradient>

      <Image style={styles.Logo} source={require('../../../assets/ExeLogo.png')}/>
      
      <View style={styles.formContainer}>
        <View>
          <TextInput style={styles.textInput} placeholder='E-mail' placeholderTextColor='#84848B'/> 
          <TextInput style={styles.textInput} placeholder='Senha' placeholderTextColor='#84848B'
            secureTextEntry={true} // Definir para true para ocultar a senha 
          />

          <TouchableOpacity>
            <Text style={styles.text}>Esqueceu sua senha?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.textBottom}>
          <Text style={styles.beforeLink}>Não possui conta? </Text>
          <TouchableOpacity>
            <Text style={styles.link}>Cadastre-se</Text>
          </TouchableOpacity>
      </View>  
      
    </View>
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

  backImage:{
    resizeMode: 'cover',
    width: 20,
    height: 20,
  },

  Logo:{
    marginTop: '20%',
    marginBottom: 10,
    width: 110,
    height: 110,
  },

  textInput:{
    width: 265,
    height: 45,
    borderWidth: 2,
    backgroundColor: '#1A1B28',
    borderColor: '#EEEEEE',
    borderRadius: 14,
    padding: 10,
    marginTop: 10,
    marginBottom: 3,
  },
  text:{
    textDecorationLine: 'underline',
    color: 'white',
    fontSize: 12,
    marginLeft: 10,
    marginBottom: 15,
    marginRight: 120,
    marginTop: 5,
  },
  button:{
    marginTop: 10,
    backgroundColor: '#F39422',
    width: 265,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText:{
    fontWeight: 'bold',
    color:'white',
  },
  
  textBottom:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '30%',
    marginBottom: 15,
  },

  beforeLink:{
    color: '#EEEEEE',
  },

  link:{
    textDecorationLine: 'underline',
    color: '#F39422',
  }


 });
 