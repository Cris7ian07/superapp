import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PerfilScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>👤 Perfil do Usuário</Text>
      <Text style={styles.subtexto}>Espaço reservado para os dados do aluno.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ECEFF1' },
  texto: { fontSize: 20, fontWeight: 'bold', color: '#263238' },
  subtexto: { fontSize: 14, color: '#37474F', marginTop: 10 }
});