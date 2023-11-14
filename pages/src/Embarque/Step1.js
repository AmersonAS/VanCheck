import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image, Platform, Pressable} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

    export default function Step1(){

        const [pressed, setPressed] = useState(false);
          
            const handlePress = () => {
              setPressed(!pressed);}
        ;
        const navigation = useNavigation();
        const irparaStep2 = () => {
            navigation.navigate("Step2");}
        const voltar = () => {
            navigation.goBack();
        };
          

        return (
            <View style={styles.container}>
                <LinearGradient style={styles.gradientBackground}
                colors={['#293A80', '#010038']}
                start={{ x: 0, y: 1.5 }}
                end={{ x: 0, y: -0.1 }}>

                    <ImageBackground style={styles.backgroundImage} source={require('../../../assets/Step1/BackImage-Step1.png')}>
                        <View style={styles.insideConteiner}>
                            <View style={styles.title}>
                                <Image style={styles.textDetails} source={require('../../../assets/textDetails.png')}/>
                                <Text style={styles.TitleStep1}>Vai e volta?</Text>
                            </View>


                            <View style={styles.StepButtons}>
                                <TouchableOpacity onPress={handlePress} style={[styles.option, pressed && styles.activiOption]}>
                                    <Image style={styles.Arrows} source={require('../../../assets/Step1/Arrow_GoBack.png')}/>
                                    <Text style={styles.optionButtonsText}>Vai e volta</Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={handlePress} style={[styles.option, styles.option2, pressed && styles.activiOption]}>
                                    <Image style={styles.Arrows} source={require('../../../assets/Step1/Arrow_Go.png')}/>
                                    <Text style={styles.optionButtonsText}>Só vai</Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={handlePress} style={[styles.option, styles.option2, pressed && styles.activiOption]}>
                                    <Image style={styles.Arrows} source={require('../../../assets/Step1/Arrow_Back.png')}/>
                                    <Text style={styles.optionButtonsText}>Só volta</Text>
                                </TouchableOpacity>
                            </View>


                            <View style={styles.buttonsBackNext}>
                                <TouchableOpacity style={styles.BackButton} onPress={voltar}>
                                    <Text style={styles.buttonText}>Voltar</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.NextButton} onPress={irparaStep2}>
                                    <Text style={styles.buttonText}>Próximo</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                </LinearGradient>
            </View>
        );
    };

//---------------------------------------------------------
const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    insideConteiner:{
        flex:1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
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

    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },

//---------------------------------------------------------
    title:{
        flexDirection:'row',
        marginTop:65,
        left:'5%',
        width:'100%',
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


//---------------------------------------------------------
    StepButtons:{
        alignItems:'center',
    },

    option:{
        paddingHorizontal:70,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor: '#1A1B28',
        width:330,
        height:80,
        borderRadius: 14,
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
    option2:{
        marginTop:30,
    },
    activiOption:{
        borderWidth: 2,
        borderColor: '#F39422',
        paddingHorizontal:70,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor: '#1A1B28',
        width:330,
        height:80,
        borderRadius: 14,
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

    /*optionButtons2:{
        borderWidth: 2,
        borderColor: '#F39422',
        marginTop:30,
    },*/

    Arrows:{
        width:40,
        height:40,
    },

    optionButtonsText:{
        color:'#eeeeee',
        fontSize:20,
    },

//---------------------------------------------------------
    buttonsBackNext:{
        justifyContent:'center',
        flexDirection:'row',
    },

    BackButton:{
        backgroundColor:'#1A1B28',
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:'5%',
        width:145,
        height:50,
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
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:'5%',
        marginLeft:30,
        width:145,
        height:50,
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