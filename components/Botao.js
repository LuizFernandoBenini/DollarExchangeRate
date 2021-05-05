import React from 'react';
import { BotaoTemplate, TextoBotao } from '../style/style';

export default function Botao(props) {
  const { value, onPress ,bottom ,right} = props;

  return (
    <BotaoTemplate bottom={bottom} right={right} onPress={() => onPress()}>
      <TextoBotao>{value}</TextoBotao>
    </BotaoTemplate>
  );
};

