import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Login/Login.js'
import Home from '../Home/Home.js';
import Cadastro from '../Cadastro/Cadastro.js';
import Step1 from '../Embarque/Step1.js';
import Step2 from '../Embarque/Step2.js';
import Step3 from '../Embarque/Step3.js';
import Routes from '../Routes.js';

const Stack = createNativeStackNavigator();

export default function StackNavigator(){
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false,}}>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Routes' component={Routes}/> 
            <Stack.Screen name='Cadastro' component={Cadastro} />
            <Stack.Screen name='Step1' component={Step1} />
            <Stack.Screen name='Step2' component={Step2} />       
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}
//>
//
//<Stack.Screen name='Home' component={Home} />
//<Stack.Screen name='Step2' component={Step2} />//
//<Stack.Screen name='Step3' component={Step3} ///>//