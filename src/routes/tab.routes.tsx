import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Options from '../screens/Options';
import Profile from '../screens/Profile';

import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#1A1B28',
          borderTopWidth: 0,

          bottom: 14,
          left: 14,
          right: 14,
          elevation: 0,
          borderRadius: 15,
          height: 65,
        },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="bus" size={size} color={'#F39422'} />;
            }

            return (
              <Ionicons name="bus-outline" size={size} color={'#EEEEEE'} />
            );
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="person" size={size} color={'#F39422'} />;
            }

            return (
              <Ionicons name="person-outline" size={size} color={'#EEEEEE'} />
            );
          },
        }}
      />

      <Tab.Screen
        name="Options"
        component={Options}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="settings" size={size} color={'#F39422'} />;
            }

            return (
              <Ionicons name="settings-outline" size={size} color={'#EEEEEE'} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
export default TabRoutes;
