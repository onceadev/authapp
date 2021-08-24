/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CreatePage from './createacc';
import LoginPage from './login';
import Home from './home';
import Icon from 'react-native-vector-icons/FontAwesome';
import Chat from './chats'
import Settings from './settings';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
     <Tab.Navigator>
       <Tab.Screen
       name ="Home"
       options={{
        headerShown: false,
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <Icon name="home" color={"#000"} size={24} />
        ),
      }}
       component={Home}
       />
       <Tab.Screen
       name ="Chat"
       options={{
        headerShown: false,
        tabBarLabel: 'Chat',
        tabBarIcon: ({ color, size }) => (
          <Icon name="comments" color={"#000"} size={24} />
        ),
      }}
       component={Chat}
       />
       <Tab.Screen
       name ="Settings"
       options={{
        headerShown: false,
        tabBarLabel: 'Settings',
        tabBarIcon: ({ color, size }) => (
          <Icon name="cog" color={"#000"} size={24} />
        ),
      }}
       component={Settings}
       />
     </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="main" component={MyTabs} options = {{headerShown: false}}/>
         <Stack.Screen name="Register"
          component={CreatePage}
          options = {{headerShown: false}}
        />
        <Stack.Screen name="Login" component={LoginPage} options = {{headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} options = {{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
