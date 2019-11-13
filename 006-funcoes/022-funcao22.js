/*
 * Arquivo: 022_funcao22.js
 * Autor: Paulo Alves
 * Descrição: comparando classe com função factory para exibir nome de pessoa
 * Data: 13/11/2019
*/

// Classe Pessoa
class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Paulo')
p1.falar()

// Função factory
const criarPessoa = nome => {
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Pedro')
p2.falar()