import React, { useState } from 'react';
import { Viu, Texto } from '../style/style'
import Botao from '../components/Botao';
import DateTimePicker from '@react-native-community/datetimepicker'

export default function PorPeriodoScreen({ navigation, data }) {
    const [dataInicio, setDataInicio] = useState(new Date(1598051730000));
    const [dataFim, setDataFim] = useState(new Date(1598051730000));

    const buscaPorPeriodo = (() => {
        console.log("buscando por periodo " + dataInicio + dataFim);
    });

    const limpaLista = (() => {

    });

    const onChange = (event, selectedDate) => {

    };

    return (
        <Viu>
            <Texto>Data Inicio</Texto>
            <DateTimePicker
                testID="dataInicioPicker"
                value={dataInicio}
                onChange={onChange}
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
                onChange={onChange}
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