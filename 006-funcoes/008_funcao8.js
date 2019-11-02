/*
 * Arquivo: 008_funcao8.js
 * Autor: Paulo Alves
 * Descrição: acessando atributos de um objeto com a palavra-chave this
 * Data: 02/11/2019
*/

const carro = {modelo: 'Gol', cor: 'Prata', ano: 2012}

function meuCarro(modelo, cor, ano){
    this.modelo = modelo
    this.cor = cor
    this.ano = ano
    console.log(`O modelo do carro ${carro.modelo}, a cor ${carro.cor} e o ano de fabricação ${carro.ano}`)
}

meuCarro()