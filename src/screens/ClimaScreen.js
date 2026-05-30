import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function ClimaScreen() {
  const [cidade, setCidade] = useState('');
  const [temperatura, setTemperatura] = useState('');

  async function buscarClima() {
    try {
      const resposta = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=SUA_CHAVE&units=metric`
      );

      const dados = await resposta.json();

      setTemperatura(dados.main.temp);
    } catch {
      alert('Erro ao consultar clima');
    }
  }

  return (
    <View>
      <TextInput
        placeholder="Cidade"
        value={cidade}
        onChangeText={setCidade}
      />

      <Button title="Buscar" onPress={buscarClima} />

      <Text>Temperatura: {temperatura}°C</Text>
    </View>
  );
}