/*
 * Arquivo: 004_array4.js
 * Autor: Paulo Alves
 * Descrição: atribuindo valores de um array por parâmetro para a soma dos mesmos usando o operador Spread(...)
 * Data: 28/10/2019
*/

function soma(n1, n2, n3){
    return n1 + n2 + n3
}

let meuArray = [7, 3, 5]
console.log(soma(...meuArray))
