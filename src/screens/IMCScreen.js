import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

export default function IMCScreen() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularIMC = () => {
    const p = parseFloat(peso.replace(',', '.'));
    const a = parseFloat(altura.replace(',', '.'));
    
    if (!p || !a) {
      Alert.alert("Erro", "Por favor, digite valores válidos.");
      return;
    }

    const imc = p / (a * a);
    let classificacao = '';

    if (imc < 18.5) classificacao = 'Abaixo do peso';
    else if (imc < 25) classificacao = 'Peso normal';
    else if (imc < 30) classificacao = 'Sobrepeso';
    else classificacao = 'Obesidade';

    setResultado(`IMC: ${imc.toFixed(2)}\nClassificação: ${classificacao}`);
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Peso (ex: 75.5)" keyboardType="numeric" onChangeText={setPeso} value={peso} />
      <TextInput placeholder="Altura (ex: 1.75)" keyboardType="numeric" onChangeText={setAltura} value={altura} />
      <Button title="Calcular" onPress={calcularIMC} />
      {resultado && <Text style={{ marginTop: 20, fontSize: 18 }}>{resultado}</Text>}
    </View>
  );
}