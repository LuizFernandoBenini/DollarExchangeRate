
import React from 'react';
import { VieW ,Texto} from '../styles/style';

export default function ResultadoPorDiaScreen({ navigation }) {

    return (
        <VieW>
            <Texto>ResultadoPor Dia</Texto>
            <Botao value="Documentacao" bottom="20px"
                    onPress={() => {
                    console.log('Clicou para voltar a documentacao');
                    navigation.navigate('Documentacao')
                }} />
        </VieW>
    );
}

