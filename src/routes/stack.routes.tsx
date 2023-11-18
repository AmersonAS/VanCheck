import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabRoutes from './tab.routes';
import Cadastro from '../screens/Cadastro';
import Login from '../screens/Login';
import Step1 from '../screens/Step1';
import Step2 from '../screens/Step2';
import Step3 from '../screens/Step3';
import Profile from '../screens/Profile';

const Stack = createNativeStackNavigator();

function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Login"
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Home" component={TabRoutes} />
      <Stack.Screen name="Step1" component={Step1} />
      <Stack.Screen name="Step2" component={Step2} />
      <Stack.Screen name="Step3" component={Step3} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

export default StackRoutes;
