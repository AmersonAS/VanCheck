
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/src/Login/Login.js';
import Home from './pages/src/Home/Home.js';
import Cadastro from './pages/src/Cadastro/Cadastro.js';
import Routes from './pages/src/Routes.js';
import Step1 from './pages/src/Embarque/Step1.js';
import {NavigationContainer} from '@react-navigation/native';

const LoginStack = createStackNavigator();

function PagesStacks() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Login/>
    </NavigationContainer>
  );
  //<Step1/>
};




