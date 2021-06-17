import { Viu, Texto } from '../style/style'
import React, { useState, useEffect } from 'react';
import { Text, FlatList } from 'react-native';
import Botao from '../components/Botao';
import axios from 'axios';

export default function DocScreen({ navigation }) {
    const [atualRate, setAtualRate] = useState([]);

    const urlLastRate = `https://economia.awesomeapi.com.br/last/USD-BRL`;

    useEffect(() => {
         getLastRate();
    }, []);

    const getLastRate = () => {
        console.log("buscando valor do real nos ultimos 30 segundos");

        axios
            .get(`${urlLastRate}`)
            .then((response) => {
                setAtualRate(response.data.USDBRL);
            })
            .catch((error) => console.error(`Error: ${error}`));

            console.log(atualRate.high); 
    };

    const renderItemComponent =  ({ item }) =>  {
        return (
            <Viu
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
            </Viu>
        );
    }

    return (
        <Viu>
            <Texto>Tela de documentacao</Texto>
            <FlatList
                data={atualRate}
                keyExtractor={(item) => item.code.toString()}
                renderItem={renderItemComponent}
            />
            <Botao value="Por Periodo"
                onPress={() => {
                    console.log('clicou Por Periodo ');
                    navigation.navigate('Periodo');
                }} />
            <Botao value="Por Dia" bottom="60px"
                onPress={() => {
                    console.log('clicou Por dia');
                    navigation.navigate('Dias')
                }} />
        </Viu>
    );
}