/**
 * Arquivo: 005-usando-foreach-parte2.js
 * Autor: Paulo Alves
 * Descrição: implementando o laço foreach para percorrer array.
 * Data: 02/03/2020
*/

Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

const aprovados = ['Agata', 'Aldo', 'Daniel', 'Raquel']
aprovados.forEach2(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)    
})