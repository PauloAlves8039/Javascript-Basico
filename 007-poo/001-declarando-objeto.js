/*
 * Arquivo: 001-declarando-objeto.js
 * Autor: Paulo Alves
 * Descrição: declaração simples de um objeto para exibir informações de produto.
 * Data: 19/02/2020
*/

const produto = new Object

produto.nome = 'Notebook'
produto.marca = 'Lenovo'
produto.preco = 2.800.toFixed(3)
produto.comAvaria = true

delete produto.comAvaria

console.log(produto)



