import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import IMCScreen from './src/screens/IMCScreen';
import QRCodeScreen from './src/screens/QRCodeScreen';
import TarefasScreen from './src/screens/TarefasScreen';
import MoedasScreen from './src/screens/MoedasScreen';
import CepScreen from './src/screens/CepScreen';
import ClimaScreen from './src/screens/ClimaScreen';
import PerfilScreen from './src/screens/PerfilScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="IMC" component={IMCScreen} />
        <Stack.Screen name="QR Code" component={QRCodeScreen} />
        <Stack.Screen name="Tarefas" component={TarefasScreen} />
        <Stack.Screen name="Moedas" component={MoedasScreen} />
        <Stack.Screen name="CEP" component={CepScreen} />
        <Stack.Screen name="Clima" component={ClimaScreen} />
        <Stack.Screen name="Perfil" component={PerfilScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
