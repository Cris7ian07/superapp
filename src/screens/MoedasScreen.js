import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MoedasScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>💵 Módulo Conversor de Moedas</Text>
      <Text style={styles.subtexto}>Espaço reservado para a ExchangeRate API.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF3E0' },
  texto: { fontSize: 20, fontWeight: 'bold', color: '#E65100' },
  subtexto: { fontSize: 14, color: '#EF6C00', marginTop: 10 }
});