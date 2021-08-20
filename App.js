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

import CreatePage from './createacc';
import LoginPage from './login';
import Home from './home';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Register"
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
