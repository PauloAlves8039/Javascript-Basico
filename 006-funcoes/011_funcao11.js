/*
 * Arquivo: 011_funcao11.js
 * Autor: Paulo Alves
 * Descrição: usando a função bind() para chamar função de contagem com intervalo de tempo de 2000 milisegundos
 * Data: 02/11/2019
*/

function contador(){
    this.valor = 1
    const self = this
    setInterval(function(){
        self.valor++
        console.log(self.valor)        
    }. bind(this), 2000)
}

new contador