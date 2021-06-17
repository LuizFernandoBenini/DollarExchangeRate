import { Viu, Texto ,TextoInputo} from '../style/style.js'
import Botao from '../components/Botao';
import React, { useState } from 'react';
import { Text, FlatList, View } from 'react-native';
import axios from 'axios';


export default function PorDiaScreen({ navigation }) {
    const [rate, setRate] = useState([]);
    const [dias, setDias] = useState([]);


    const buscaPorDia = () => {
        console.log("buscando por " + dias + " dia");
        const urlPorDia= `https://economia.awesomeapi.com.br/json/daily/USD-BRL/${dias}`;

        axios
        .get(`${urlPorDia}`)
        .then((response) => {
            setRate(response.data);
        })
        .catch((error) => console.error(`Error: ${error}`));

        navigation.navigate("Dias");
    };

    const renderItemComponent = ({ item }) =>  {
        return (
            <View
                style={{
                    marginTop: 1.5,
                    paddingVertical: 10,
                    borderWidth: 3,
                    borderColor: '#20232a',
                    borderRadius: 5,
                    alignItems: 'center',
                    width: '100%',
                }}>
                <Text>Mínima: {item.high}</Text>
                <Text>Máxima: {item.low}</Text>
                <Text>Variação: {item.varBid}</Text>
            </View>
        );
    }

    return (
        <Viu>
           <Texto>Relatório de cotação nos últimos dias</Texto>
           <FlatList
                data={rate}
                keyExtractor={(item) => item.high}
                renderItem={renderItemComponent}
            />
           <TextoInputo
                bottom="60px"
                title="dias"
                value={rate}
                onChangeText={(dias) => setDias(dias)} />
            <Botao bottom="20px"
                value="Pesquisar"
                onPress={buscaPorDia} />
        </Viu>
    );
}