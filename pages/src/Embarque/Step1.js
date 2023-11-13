import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image, Platform} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

    export default function Step1(){
        const [opcaoSelecionada, setOpcaoSelecionada] = useState(null);

        const handlePress = (opcao) => {
            setOpcaoSelecionada(opcao);
        };

        return (
            <View style={styles.container}>
                <LinearGradient style={styles.gradientBackground}
                colors={['#293A80', '#010038']}
                start={{ x: 0, y: 1.5 }}
                end={{ x: 0, y: -0.1 }}/> 

                <View style={styles.title}>
                    <Image style={styles.textDetails} source={require('../../../assets/textDetails.png')}/>
                    <Text style={styles.TitleStep1}>Vai e volta?</Text>
                </View>


                {/*<View style={styles.contentBackImage}>
                    <ImageBackground source={require('../../../assets/backImage-Step1.png')} style={styles.backImage}/>       
                </View>*/}
                

                <View style={styles.StepButtons}>
                    <TouchableOpacity style={styles.optionButtons}>
                        <Image style={styles.textDetails} source={require('../../../assets/Arrow_GoBack.svg')}/>
                        <Text style={styles.optionButtonsText}>Opção 1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionButtons}>
                        <Text style={styles.optionButtonsText}>Opção 1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionButtons}>
                        <Text style={styles.optionButtonsText}>Opção 1</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.buttonsBackNext}>
                    <TouchableOpacity style={styles.BackButton}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.NextButton}>
                        <Text style={styles.buttonText}>Próximo</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        position: 'relative',
    },

    gradientBackground:{
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      },

    title:{
        flexDirection:'row',
        marginTop:80,
        left:20,
        position:'absolute',
    },

    textDetails:{
        width:15,
        height:15,
    },

    TitleStep1:{
        color: '#eeeeee',
        fontWeight: 'bold',
        fontSize:35,
    },

    /*contentBackImage:{
        flex:1,
        flexDirection: 'column',
        justifyContent: 'space-betwen',
        alignItems: 'center',
    },

    backImage:{
        alignItems:'center',
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },*/

    StepButtons:{
        marginTop:'65%',
        alignItems:'center',
    },
    optionButtons:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#1A1B28',
        marginTop:30,
        width:350,
        height:80,
        borderRadius: 14,
    },
    optionButtonsText:{
        color:'#eeeeee',
        fontSize:20,
    },

    buttonsBackNext:{
        flex:1,
        alignItems:'flex-end',
        justifyContent:'center',
        flexDirection:'row',
    },

    BackButton:{
        backgroundColor:'#1A1B28',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:'5%',
        width:145,
        height:60,
        ...Platform.select({
            ios: {
              shadowColor: 'rgba(0, 0, 0, 0.3)',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.8,
              shadowRadius: 2,
            },
            android: {
              elevation: 5,
            },
          }),
    },

    NextButton:{
        backgroundColor:'#F39422',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:'5%',
        marginLeft:30,
        width:145,
        height:60,
        ...Platform.select({
            ios: {
              shadowColor: 'rgba(0, 0, 0, 0.3)',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.8,
              shadowRadius: 2,
            },
            android: {
              elevation: 5,
            },
          }),
    },

    buttonText:{
        color:'#eeeeee',
        fontWeight:'bold',
        fontSize:20,
      }
})