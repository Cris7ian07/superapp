import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function MoedasScreen() {
  const [valor, setValor] = useState('');
  const [resultado, setResultado] = useState('');

  async function converter() {
    try {
      const resposta = await fetch(
        'https://open.er-api.com/v6/latest/BRL'
      );

      const dados = await resposta.json();

      const dolar = Number(valor) * dados.rates.USD;

      setResultado(dolar.toFixed(2));
    } catch {
      alert('Erro');
    }
  }

  return (
    <View>
      <TextInput
        placeholder="Valor em reais"
        value={valor}
        onChangeText={setValor}
      />

      <Button title="Converter" onPress={converter} />

      <Text>Dólar: {resultado}</Text>
    </View>
  );
}