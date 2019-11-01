/*
 * Arquivo: 002_funcao2.js
 * Autor: Paulo Alves
 * Descrição: função sem retorno para executar as 4 operações aritméticas passando valores por parâmetro
 * Data: 01/11/2019
*/

function calcular(n1, n2){
    let soma = n1 + n2
    let subtracao = n1 - n2
    let multiplicacao = n1 * n2
    let divisao = n1 / n2

    console.log(`Soma  ${soma} - Subtração ${subtracao} - Multiplicação ${multiplicacao} - Divisão : ${divisao}`)
}

calcular(5, 2)