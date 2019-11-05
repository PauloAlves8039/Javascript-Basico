/*
 * Arquivo: 020_funcao20.js
 * Autor: Paulo Alves
 * Descrição: usando função factory para retornar objeto com dados de um produto passados por parâmetro 
 * Data: 05/11/2019
*/

function criarDadosProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarDadosProduto('Processador i3', 990.50.toFixed(2)))
console.log(criarDadosProduto('Memoria 8GB', 200.00.toFixed(2)))