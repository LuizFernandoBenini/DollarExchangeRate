
import React from 'react';
import PorPeriodoScreen from './navigateScreen/PorPeriodoScreen';
import PorDiaScreen from './navigateScreen/PorDiaScreen';
import DocScreen from './navigateScreen/DocScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Documentacao" component={DocScreen} 
           options={{ title: 'Dicas de uso' }}/>
      <Stack.Screen name="Periodo" component={PorPeriodoScreen} 
          options={{ title: 'Busca por período' }}/>
      <Stack.Screen name="Dias" component={PorDiaScreen} 
          options={{ title: 'Busca por dias' }} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

