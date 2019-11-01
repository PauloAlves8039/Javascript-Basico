/*
 * Arquivo: 005_funcao5.js
 * Autor: Paulo Alves
 * Descrição: usando callback para exibir mensagem após 5 segundos utilizando a função setTimeout()
 * Data: 01/11/2019
*/

function boasVindas(){
    let nome = 'Paulo'
    console.log(`Olá ${nome}, seja bem vindo(a) a linguagem Javascript!`)
}

setTimeout(boasVindas, 5000)