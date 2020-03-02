/**
 * Arquivo: 004-usando-foreach-parte1.js
 * Autor: Paulo Alves
 * Descrição: percorrendo array com o laço foreach.
 * Data: 02/03/2020
*/

const aprovados = ['Agata', 'Aldo', 'Daniel', 'Raquel']
aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)    
})