import { Viu, Texto } from '../style/style'
import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import Botao from '../components/Botao';
import axios from 'axios';

export default function DocScreen({ navigation }) {
    const [atualRate, setAtualRate] = useState({});

    const urlLastRate = `https://economia.awesomeapi.com.br/last/USD-BRL`;

    useEffect(() => {
        getLastRate();
    });

    async function getLastRate() {
        console.log("buscando valor do real nos ultimos 30 segundos");

        axios
            .get(`${urlLastRate}`)
            .then((response) => {
                setAtualRate(response.data.USDBRL);

            })
            .catch((error) => console.error(`Error: ${error}`));

    };

    function renderItemComponent(item) {

        return (

            <Viu
                style={{
                    marginTop: 1.5,
                    paddingVertical: 10,
                    borderWidth: 3,
                    borderColor: '#20232a',
                    borderRadius: 5,
                    height: '100%',
                    alignItems: 'center',
                    width: '100%'
                }}>
                <Text>Mínima: {item ? item.high : '?'}</Text>
                <Text>Máxima: {item ? item.low : '?'}</Text>
                <Text>Variação: {item ? item.varBid : '?'}</Text>
            </Viu>
        );
    }

    return (
        <Viu >

            {renderItemComponent(atualRate)}
            <Texto>Tela de documentação</Texto >
            <Text >
                Necessário instalar yarn e expo{"\n"}
                {"\n"}
                Use o comando "yarn start" para iniciar o projeto{"\n"}
                {"\n"}
                Pacotes{"\n"}
                npm install --global yarn{"\n"}
                npm install --global expo-cli{"\n"}
                yarn add @react-native-community/datetimepicker{"\n"}
                yarn add @react-navigation/native{"\n"}
                yarn add @react-navigation/stack{"\n"}
                yarn add axios{"\n"}
            </Text>
            <Botao value="Por Dia" bottom="60px"
                onPress={() => {
                    console.log('clicou Por dia');
                    navigation.navigate('Dias')
                }} />
            <Botao value="Por Periodo"
                onPress={() => {
                    console.log('clicou Por Periodo ');
                    navigation.navigate('Periodo');
                }} />

        </Viu >
    );
}