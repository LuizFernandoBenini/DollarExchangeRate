
import React from 'react';
import { Viu,Texto } from '../styles/style';

export default function ResultadoPorPeriodoScreen({ navigation }) {

    return (
        <Viu>
            <Texto>Resultado por periodo</Texto>
            <Botao value="Documentacao" bottom="20px" right="20px"
                onPress={() => {
                    console.log('Clicou para voltar a documentacao');
                    navigation.navigate('Documentacao')
                }} />
        </Viu>
    );
}

