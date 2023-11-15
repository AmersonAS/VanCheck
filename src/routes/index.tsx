import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabRoutes from './tab.routes';
import StackRoutes from './stack.routes';

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
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

export default Routes;
