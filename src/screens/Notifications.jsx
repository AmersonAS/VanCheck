import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {AntDesign } from '@expo/vector-icons';

export default function Notifications(){

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.gradientBackground}
        colors={['#293A80', '#010038']}
        start={{ x: 0, y: 1.5 }}
        end={{ x: 0, y: -0.1 }}
      />

      <View style={styles.header}>
        <Text style={styles.headerText}>Notificações</Text>
      </View>

      <View style={styles.content}>
        <ImageBackground
          source={require('../../assets/BackImage-Notifications.png')}
          style={styles.backImage}
        >
          <ScrollView style={{ width: '100%' }}>
            <View style={styles.ScrollTest}>

              <View style={styles.notification}>
                <Text style={styles.textNotification}>- Você possui uma viagem marcada às 17:40, no posto BADU. Não se esqueça!</Text>
                <TouchableOpacity style={styles.deleteButton}>
                  <AntDesign name="delete" size={22} color="#E31144" style={{alignSelf:'flex-end', marginTop:15}}/>
                </TouchableOpacity>
              </View>

            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  gradientBackground: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },

//---------------------------------------------------------

  header: {
    paddingTop: '10%',
    paddingBottom: 12,
    alignItems: 'center',
    backgroundColor: '#1A1B28',
    width: '100%',
  },

  headerText:{
    color: '#eeeeee',
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 3,
  },
  //---------------------------------------------------------

  content: {
    flex: 1,
  },

  //---------------------------------------------------------

  backImage: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  //---------------------------------------------------------

  transparentBar: {
    borderBottomWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
    backgroundColor: 'rgba(60, 60, 158, 0.3)',
    alignItems: 'center',
    padding: 15, 
    width: '100%',
  },

  textViagens: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  //---------------------------------------------------------

  ScrollTest: {
    paddingTop: '3%',
    alignItems: 'center',
  },

  //---------------------------------------------------------

  notification: {
    width: '90%',
    height: 'auto',
    backgroundColor: 'rgba(60, 60, 158, 0.3)',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
    padding: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  textNotification:{
    color: '#eee',
    fontSize: 17,
  },

  deleteButton:{
    width: '100%',
  },

  //---------------------------------------------------------

  embarcarButton: {
    backgroundColor: '#F39422',
    width: 150,
    height: 50,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '24%',
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});