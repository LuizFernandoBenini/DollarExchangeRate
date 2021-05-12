# ReactNative - DollarExchangeRate
Aplicação que consome uma Api de cotação do Dolar por período ou passando quantos dias passados deseja ver.

Url Api: https://docs.awesomeapi.com.br/api-de-moedas

# Métodos Utilizados 
	https://economia.awesomeapi.com.br/json/last/:moedas -> o método pega os dados atualizados da ultima cotação da moeda(dolar) para publicar na tela inicial App.js
	https://economia.awesomeapi.com.br/json/daily/:moeda/:numero_dias -> será ultilizado na tela de pesquisa por dia. O valor do dia é passado e a busca pega todos os dados dos ultimos X dias.
	https://economia.awesomeapi.com.br/json/daily/:moeda?start_date=20180901&end_date=20180930 -> serão enviadas duas datas através do datepicker que serão eviadas a esse métodos para pegar a cotação do período entrega a menor e maior data.
	
# Instalação
	Necessário instalar yarn e expo 

	Use o comando "yarn start" para iniciar o projeto

	/Pacotes 
		npm install --global yarn
		npm install --global expo-cli
		yarn add @react-native-community/datetimepicker
		yarn add @react-navigation/native
		yarn add @react-navigation/stack
	
	
