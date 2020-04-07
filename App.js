import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './components/Home'
import OtherScreen from './components/OtherScreen'
import NewScreen from './components/NewScreen'
import Login from './components/Login'
// import { createDrawerNavigator } from '@react-navigation/drawer'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name='Login' component={Login}/> 
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="OtherScreen" component={OtherScreen} />
        <Stack.Screen name='NewScreen' component={NewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;