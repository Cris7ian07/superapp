import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function CepScreen() {
  const [cep, setCep] = useState('');
  const [dados, setDados] = useState({});

  async function buscarCEP() {
    try {
      const resposta = await fetch(
        `https://viacep.com.br/ws/${cep}/json/`
      );

      const json = await resposta.json();
      setDados(json);
    } catch {
      alert('Erro ao consultar CEP');
    }
  }

  return (
    <View>
      <TextInput
        placeholder="Digite o CEP"
        value={cep}
        onChangeText={setCep}
      />

      <Button title="Consultar" onPress={buscarCEP} />

      <Text>Rua: {dados.logradouro}</Text>
      <Text>Bairro: {dados.bairro}</Text>
      <Text>Cidade: {dados.localidade}</Text>
      <Text>Estado: {dados.uf}</Text>
    </View>
  )};