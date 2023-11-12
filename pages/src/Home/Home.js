import { Image, Button, StyleSheet, Text, TextInput, View, TouchableOpacity, ImageBackground} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { BlurView } from 'expo-blur';

export default function Home() {
    return (
        <View style={styles.container}>
          <LinearGradient style={styles.gradientBackground}
            colors={['#293A80', '#010038']}
            start={{ x: 0, y: 1.5 }}
            end={{ x: 0, y: -0.1 }}/>

          <View style={styles.header}>
            <Image source={require('../../../assets/ExeLogo.png')} style={[styles.LogoImage, {width:30, height:30}]}/>

            <Text style={styles.TextPassageiro}>Passageiro | Nathan Silva</Text>
          </View>

          <View style={styles.transparentBar}>
            <Text style={styles.textViagens}>Viagens</Text>
          </View>

          <View style={styles.content}>
            <ImageBackground source={require('../../../assets/Rota-Enfeite.png')} style={styles.backImage}>
              <TouchableOpacity style={styles.embarcarButton}>
                <Text style={styles.buttonText}>Embarcar</Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
        </View>
        
    )

};

const styles = StyleSheet.create({
    container:{
        flex: 1,
      },

      header:{
        paddingTop:'10%',
        paddingBottom:12,
        alignItems: 'center',
        backgroundColor: '#1A1B28',
        width: '100%',
      },

      LogoImage:{
        marginBottom:5,
      },

      TextPassageiro:{
        fontSize:10,
        color:'#eeeeee',
      },

      content:{
        flex:1,
      },
    
      gradientBackground: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      },

      transparentBar:{
        padding:15,
        alignItems: 'center',
        width:'100%',
        backgroundColor:'rgba(38, 39, 50, 0.3)',
      },

      textViagens:{
        color: '#FFFFFF',
        fontWeight:'bold',
      },

      backImage:{
        justifyContent:'flex-end',
        alignItems:'center',
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
      },

      embarcarButton:{
        backgroundColor:'#F39422',
        width:150,
        height:50,
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:'24%',
      },

      buttonText:{
        color:'#FFFFFF',
        fontWeight:'bold',
        fontSize:16,
      }
})