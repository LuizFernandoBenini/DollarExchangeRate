
import styled from 'styled-components/native'


export const BotaoTemplate = styled.TouchableOpacity`
    bottom: ${props => props.bottom ? props.bottom : "20px"};
    right: ${props => props.right ? props.right : "100px"};  
    width: 150px;
    border-radius: 200px;
    position: absolute;
    justify-content: center;
    align-items: center;
    background-color: #06f;
    padding-bottom:5px;
`




export const TextoBotao = styled.Text`
    color:#fff;
    font-size: 20px;
    font-weight: bold;
`

export const Texto = styled.Text`
    color:#5b5b58;
    font-size: 15px;
    font-weight: 500;
`

export const VieW = styled.View`
  display: flex;
  flex: 1;
`