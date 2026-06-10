import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ClimaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>☀️ Módulo de Consulta de Clima</Text>
      <Text style={styles.subtexto}>Espaço reservado para a API do OpenWeatherMap.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E0F7FA' },
  texto: { fontSize: 20, fontWeight: 'bold', color: '#006064' },
  subtexto: { fontSize: 14, color: '#00838F', marginTop: 10 }
});