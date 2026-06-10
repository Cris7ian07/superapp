// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function HomeScreen({ navigation }) {
  // Lista com todos os módulos do projeto, suas rotas e cores dos botões
  const modulos = [
    { nome: 'Calculadora IMC', rota: 'IMC', cor: '#4CAF50' },
    { nome: 'Leitor QR Code', rota: 'QRCode', cor: '#2196F3' },
    { nome: 'Lista de Tarefas', rota: 'Tarefas', cor: '#9C27B0' },
    { nome: 'Conversor de Moedas', rota: 'Moedas', cor: '#FF9800' },
    { nome: 'Consulta CEP', rota: 'CEP', cor: '#E91E63' },
    { nome: 'Consulta Clima', rota: 'Clima', cor: '#00BCD4' },
    { nome: 'Perfil do Usuário', rota: 'Perfil', cor: '#607D8B' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.subtitulo}>Selecione uma ferramenta abaixo:</Text>
      
      {modulos.map((item, index) => (
        <TouchableOpacity 
          key={index} 
          style={[styles.botao, { backgroundColor: item.cor }]} 
          // O navigation.navigate abre a tela baseada na propriedade 'rota'
          onPress={() => navigation.navigate(item.rota)}
        >
          <Text style={styles.textoBotao}>{item.nome}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    padding: 20, 
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    flexGrow: 1
  },
  subtitulo: { 
    fontSize: 16, 
    color: '#666', 
    marginBottom: 20,
    textAlign: 'center' 
  },
  botao: { 
    width: '100%', 
    padding: 18, 
    borderRadius: 10, 
    marginBottom: 15, 
    alignItems: 'center',
    // Sombra leve para ficar bonito no celular
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2, 
  },
  textoBotao: { 
    color: '#fff', 
    fontSize: 18, 
    fontWeight: 'bold' 
  }
});