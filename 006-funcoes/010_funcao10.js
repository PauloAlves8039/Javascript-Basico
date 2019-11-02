/*
 * Arquivo: 010_funcao10.js
 * Autor: Paulo Alves
 * Descrição: usando this e a função bind()
 * Data: 02/11/2019
*/

const pessoa = {
    mensagem: 'Bem vindo(a) a linguagem Javascript!',
    saudacao(){
        console.log(this.mensagem)
    }}

    pessoa.saudacao()

    // Conflito entre paradigmas: funcional e OO
    const saudacao = pessoa.saudacao
    saudacao()

    // Bind - criando uma nova função
    const recado = pessoa.saudacao.bind(pessoa)
    recado()