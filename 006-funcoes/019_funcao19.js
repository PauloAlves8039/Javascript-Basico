/*
 * Arquivo: 019_funcao19.js
 * Autor: Paulo Alves
 * Descrição: função para acessar e manipular variáveis externas usando o conceito de Closures
 * Data: 05/11/2019
*/

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhafuncao = fora()
console.log(minhafuncao())
