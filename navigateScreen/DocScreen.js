import { VieW, Texto } from '../style/style'
import Botao from '../components/Botao';
import React from 'react';

export default function DocScreen({ navigation }) {

    return (
        <VieW>
            <Texto>Tela de documentacao</Texto>
            <Botao value="Por Periodo"
                    onPress={() => {
                    console.log('clicou Por Periodo ');
                    navigation.navigate('Periodo');
                }} />
            <Botao  value="Por Dia" bottom="60px" right="100px"
                    onPress={() => { 
                    console.log('clicou Por dia') ;
                    navigation.navigate('Dias')}} />
        </VieW>
    );
}