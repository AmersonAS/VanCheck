import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Notifications from '../screens/Notifications';
import Profile from '../screens/Profile';

import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator
    initialRouteName="Home"
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
        name="Notifications"
        component={Notifications}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="notifications" size={size} color={'#F39422'} />;
            }

            return (
              <Ionicons name="notifications-outline" size={size} color={'#EEEEEE'} />
            );
          },
        }}
      />

      <Tab.Screen
        name="Home"
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

    </Tab.Navigator>
  );
}
export default TabRoutes;
