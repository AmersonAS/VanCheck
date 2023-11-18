import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabRoutes from './tab.routes';
import StackRoutes from './stack.routes';
import React, { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Stack" component={StackRoutes} />
      <Stack.Screen name="Tabs" component={TabRoutes} />
    </Stack.Navigator>
  );
}

function Routes() {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Usuário está logado
        const uid = user.uid;
        const email = user.email;
        const name = user.displayName;
        console.log(`Usuário conectado: ${uid}, ${email}, ${name}`);
        // Execute ações específicas do usuário conectado, se necessário
      } else {
        // Nenhum usuário está logado
        console.log('Nenhum usuário conectado');
        // Execute ações específicas para quando nenhum usuário está conectado, se necessário
      }
    });
    // Ao desmontar o componente, interrompa o observador
    return () => unsubscribe();
  }, []); // O array vazio assegura que o useEffect só será executado uma vez, equivalente a componentDidMount

  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

export default Routes;
