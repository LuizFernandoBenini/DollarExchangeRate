import { VieW, Texto } from '../style/style'
import { TextInput } from 'react-native';
import Botao from '../components/Botao';
import React, { useState } from 'react';


export default function PorDiaScreen({ navigation, data }) {
    const [diasPassados, setDias] = useState("");

    const buscaPorDia = (() => {
        console.log("buscando por dia");
       // data.params.add(diasPassados);
        navigation.navigate("Dias");
    });


    return (
        <VieW>
            <Texto>Relatório de cotação nos últimos dias</Texto>
            <TextInput
                title="dias"
                value={diasPassados}
                onChangeText={(dias) => setDias(dias)} />
            <Botao bottom="500px"
                value="Pesquisar"
                onPress={buscaPorDia} />
        </VieW>
    );
}