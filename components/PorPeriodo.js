import React from 'react';
import { BotaoPeriodo, Texto } from '../style/style'; 

export default function PorPeriodo() {

  return (

      <BotaoPeriodo onPress={()=> console.log('Buscando por perido')}>
        <Texto>Por Periodo</Texto>
      </BotaoPeriodo>

  );
};

