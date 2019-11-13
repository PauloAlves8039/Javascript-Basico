/*
 * Arquivo: 023_funcao23.js
 * Autor: Paulo Alves
 * Descrição: declarando função construtora para exibir nome de pessoa
 * Data: 13/11/2019
*/

function Pessoa(nome){
    this.nome = nome

    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Paulo')
p1.falar()