/*
 * Arquivo: 003_funcao3.js
 * Autor: Paulo Alves
 * Descrição: função com retorno para executar as 4 operações aritméticas passando valores por parâmetro
 * Data: 01/11/2019
*/

function calculando(n1, n2){
    let soma = n1 + n2
    let subtracao = n1 - n2
    let multiplicacao = n1 * n2
    let divisao = n1 / n2

    const resultado = ['Soma: ' + soma, 'Subtração: ' + subtracao, 'Multiplicação: ' + multiplicacao, 'Divisão: ' + divisao]
    return resultado
}

console.log(calculando(7, 3))