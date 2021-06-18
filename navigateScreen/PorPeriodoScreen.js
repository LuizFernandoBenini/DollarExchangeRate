import React, { useState } from 'react';
import { Viu, Texto } from '../style/style'
import Botao from '../components/Botao';
import DateTimePicker from '@react-native-community/datetimepicker'

export default function PorPeriodoScreen({ navigation }) {
    const [dataInicio, setDataInicio] = useState(new Date(1598051730000));
    const [dataFim, setDataFim] = useState(new Date(1598051730000));
    const [rate, setRate] = useState([]);

    const buscaPorPeriodo = (() => {
        console.log("buscando por periodo " + dataInicio + dataFim);

        const urlPorPeriodo= `https://economia.awesomeapi.com.br/json/daily/USD-BRL/?start_date=${dataInicio}&end_date=${dataFim}`;

        axios
        .get(`${urlPorPeriodo}`)
        .then((response) => {
            setRate(response.data);
        })
        .catch((error) => console.error(`Error: ${error}`));

        navigation.navigate("Periodo");
    });

    return (
        <Viu>
            <Texto>Data Inicio</Texto>
            <DateTimePicker
                testID="dataInicioPicker"
                value={dataInicio}
                onChange={(dataInicio) => setDataInicio(dataInicio)}
                style={{ width: 200 }}
                mode="date"
                placeholder="select date"
                format="YYYY-MM-DD"
                minDate="2016-05-01"
                maxDate="2016-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
            />

            <Texto>Data Fim</Texto>
            <DateTimePicker
                testID="dataFimPicker"
                value={dataFim}
                onChange={(dataFim) => setDataFim(dataFim)}
                mode="date"
                placeholder="select date"
                format="YYYY-MM-DD"
                minDate="2016-05-01"
                maxDate="2016-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
            />
            <Botao bottom="20px"
                value="Pesquisar"
                onPress={buscaPorPeriodo} />
        </Viu>
    );
}