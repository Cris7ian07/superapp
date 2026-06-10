import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function QRCodeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>📷 Leitor de QR Code</Text>
      <Text style={styles.subtexto}>Espaço reservado para a abertura da câmera.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E8EAF6' },
  texto: { fontSize: 20, fontWeight: 'bold', color: '#1A237E' },
  subtexto: { fontSize: 14, color: '#283593', marginTop: 10 }
});