import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function IMCScreen() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');

  function calcular() {
    const imc = Number(peso) / (Number(altura) * Number(altura));
    setResultado(imc.toFixed(2));
  }

  return (
    <View>
      <Text>Peso</Text>
      <TextInput value={peso} onChangeText={setPeso} />

      <Text>Altura</Text>
      <TextInput value={altura} onChangeText={setAltura} />

      <Button title="Calcular" onPress={calcular} />

      <Text>IMC: {resultado}</Text>
    </View>
  );
}