import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// 1. IMPORTANTE: Crie e importe uma tela de Home (Menu Principal)
import HomeScreen from './src/screens/HomeScreen'; 

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
      {/* Definimos a Home como a tela inicial padrão */}
      <Stack.Navigator initialRouteName="Home">
        
        {/* Tela do Menu Principal */}
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: '🎓 Super App do Aluno' }} 
        />
        
        {/* Módulos do aplicativo */}
        <Stack.Screen 
          name="IMC" 
          component={IMCScreen} 
          options={{ title: 'Calculadora de IMC' }} 
        />
        <Stack.Screen 
          name="QRCode" 
          component={QRCodeScreen} 
          options={{ title: 'Leitor de QR Code' }} 
        />
        <Stack.Screen 
          name="Tarefas" 
          component={TarefasScreen} 
          options={{ title: 'Lista de Tarefas' }} 
        />
        <Stack.Screen 
          name="Moedas" 
          component={MoedasScreen} 
          options={{ title: 'Conversor de Moedas' }} 
        />
        <Stack.Screen 
          name="CEP" 
          component={CepScreen} 
          options={{ title: 'Consulta de CEP' }} 
        />
        <Stack.Screen 
          name="Clima" 
          component={ClimaScreen} 
          options={{ title: 'Consulta de Clima' }} 
        />
        <Stack.Screen 
          name="Perfil" 
          component={PerfilScreen} 
          options={{ title: 'Perfil do Usuário' }} 
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}