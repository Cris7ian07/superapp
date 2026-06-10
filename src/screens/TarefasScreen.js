import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TarefasScreen() {
  const [tarefa, setTarefa] = useState('');
  const [lista, setLista] = useState([]);

  // Carregar tarefas ao abrir a tela
  useEffect(() => {
    carregarTarefas();
  }, []);

  const carregarTarefas = async () => {
    const dados = await AsyncStorage.getItem('@tarefas');
    if (dados) setLista(JSON.parse(dados));
  };

  const salvarTarefas = async (novaLista) => {
    setLista(novaLista);
    await AsyncStorage.setItem('@tarefas', JSON.stringify(novaLista));
  };

  const adicionarTarefa = () => {
    if (!tarefa) return;
    const novaLista = [...lista, { id: Date.now().toString(), texto: tarefa, concluida: false }];
    salvarTarefas(novaLista);
    setTarefa('');
  };

  const excluirTarefa = (id) => {
    const novaLista = lista.filter(t => t.id !== id);
    salvarTarefas(novaLista);
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Nova tarefa..." value={tarefa} onChangeText={setTarefa} />
      <Button title="Adicionar" onPress={adicionarTarefa} />
      
      <FlatList 
        data={lista}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
            <Text>{item.texto}</Text>
            <TouchableOpacity onPress={() => excluirTarefa(item.id)}>
              <Text style={{ color: 'red' }}>Excluir</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}