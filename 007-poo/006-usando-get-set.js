/*
 * Arquivo: 006-usando-get-set.js
 * Autor: Paulo Alves
 * Descrição: atribuindo uma sequência de valor usando os métodos acessores get e set em sua propriedade.
 * Data: 25/02/2020
*/

const sequencia = {
    _valor: 1,
    get valor(){
        return this._valor++
    },
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)


