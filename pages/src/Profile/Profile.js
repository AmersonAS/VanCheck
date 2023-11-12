import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Profile = () => {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState(null);

  const handlePress = (opcao) => {
    setOpcaoSelecionada(opcao);
  };

  return (
    <View>
      <Text>Opção Selecionada: {opcaoSelecionada}</Text>

      <TouchableOpacity onPress={() => handlePress('Opção 1')}>
        <Text>Opção 1</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handlePress('Opção 2')}>
        <Text>Opção 2</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handlePress('Opção 3')}>
        <Text>Opção 3</Text>
      </TouchableOpacity>
    </View>
  );
};


export default Profile;
