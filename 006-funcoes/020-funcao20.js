/*
 * Arquivo: 020_funcao20.js
 * Autor: Paulo Alves
 * Descrição: usando função factory para retornar objeto com dados de uma pessoa 
 * Data: 05/11/2019
*/

function criarDadosPessoa(){
    return{
        nome: 'Maria',
        sobrenome: 'Santos',
        idade: 35
    }
}

console.log(criarDadosPessoa())