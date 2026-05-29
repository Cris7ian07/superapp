import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import IMCScreen from './IMCScreen';
import QRCodeScreen from './QRCodeScreen';
import TarefasScreen from './TarefasScreen';
import MoedasScreen from './MoedasScreen';
import CepScreen from './CepScreen';
import ClimaScreen from './ClimaScreen';
import PerfilScreen from './PerfilScreen';

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
