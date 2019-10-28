/*
 * Arquivo: 003_array3.js
 * Autor: Paulo Alves
 * Descrição: declarando e iterando um array multidimensional para exibir nomes de alguns estados e capitais
 * Data: 28/10/2019
*/

const estadosCapitais = new Array()

estadosCapitais[0] = new Array('Pernambuco', 'Paraíba', 'Alagoas')
estadosCapitais[1] = new Array('Recife', 'João Pessoa', 'Maceió')

for(let ec in estadosCapitais){
    console.log(`${estadosCapitais[ec]}`)
}