import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Step1(){
    return (
        <View>
            <LinearGradient style={styles.gradientBackground}
            colors={['#293A80', '#010038']}
            start={{ x: 0, y: 1.5 }}
            end={{ x: 0, y: -0.1 }}/>
        </View>
    );
};

const styles = StyleSheet.create({
    gradientBackground: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      },
})
