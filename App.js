import React from 'react';

import Main from "./screens/Main";
import HomeScreen from './screens/Home'

import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'


const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name = "Home" component = {HomeScreen} />
        <Stack.Screen name = "Main" component = {Main} />

      </Stack.Navigator>
    </NavigationContainer>
    )
}
