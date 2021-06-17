
import React from 'react';
import { Viu ,Texto} from '../styles/style';

export default function ResultadoPorDiaScreen({ navigation }) {

    return (
        <Viu>
            <Texto>ResultadoPor Dia</Texto>
            <Botao value="Documentacao" bottom="20px"
                    onPress={() => {
                    console.log('Clicou para voltar a documentacao');
                    navigation.navigate('Documentacao')
                }} />
        </Viu>
    );
}

