/*
 * Arquivo: 006_funcao6.js
 * Autor: Paulo Alves
 * Descrição: armazenando arrow function em uma constante para converter caracteres maiúsculos
 * Data: 02/11/2019
*/

const pesssoa = {nome: 'José', sobrenome: ' da Silva'}

const imprimirMaiusculo = (pessoa) => {
    console.log(pessoa.nome.toUpperCase() + '' + pessoa.sobrenome.toUpperCase())
}

imprimirMaiusculo(pesssoa)
