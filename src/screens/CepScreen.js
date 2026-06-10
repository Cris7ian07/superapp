import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';

export default function CepScreen() {
  const [cep, setCep] = useState('');
  const [resultado, setResultado] = useState(null);

  const consultarCep = async () => {
    if (cep.length !== 8) {
      Alert.alert("Erro", "O CEP deve conter 8 dígitos.");
      return;
    }

    try {
      const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const dados = await response.json();

      if (dados.erro) {
        Alert.alert("Erro", "CEP não encontrado.");
        return;
      }

      setResultado(dados);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível conectar à API.");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Digite o CEP (apenas números)" keyboardType="numeric" maxLength={8} onChangeText={setCep} value={cep} />
      <Button title="Buscar Endereço" onPress={consultarCep} />

      {resultado && (
        <View style={{ marginTop: 20 }}>
          <Text>Rua: {resultado.logradouro}</Text>
          <Text>Bairro: {resultado.bairro}</Text>
          <Text>Cidade: {resultado.localidade}</Text>
          <Text>Estado: {resultado.uf}</Text>
        </View>
      )}
    </View>
  );
}