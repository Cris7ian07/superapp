import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function TarefasScreen() {
  const [tarefa, setTarefa] = useState('');
  const [lista, setLista] = useState([]);

  function adicionar() {
    setLista([...lista, tarefa]);
    setTarefa('');
  }

  return (
    <View>
      <TextInput
        placeholder="Nova tarefa"
        value={tarefa}
        onChangeText={setTarefa}
      />

      <Button title="Adicionar" onPress={adicionar} />

      {lista.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </View>
  );
}