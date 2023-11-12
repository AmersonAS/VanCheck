
import { StyleSheet, Text, View } from 'react-native';

import Login from './pages/src/Login/Login.js'
import Cadastro from './pages/src/Cadastro/Cadastro.js'
import Routes from './pages/src/Routes.js';
import Step1 from './pages/src/Embarque/Step1.js'

import {NavigationContainer} from '@react-navigation/native'

export default function App() {
  return (
    <NavigationContainer>
      <Step1/>
    </NavigationContainer>
  );
};



