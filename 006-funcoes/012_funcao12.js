/*
 * Arquivo: 012_funcao12.js
 * Autor: Paulo Alves
 * Descrição: usando função anônima para imprimir operação aritmética 
 * Data: 02/11/2019
*/

const soma = function(x, y){
    return x + y
}

const imprimirResultados = function(a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultados(3, 4)
imprimirResultados(3, 4, soma)
imprimirResultados(3, 4, function (x, y) {
    return x - y
})
imprimirResultados(3, 4, (x, y ) => x * y)

const pessoa = {
    falar: function (){
        console.log('Olá')
    }
}

pessoa.falar()