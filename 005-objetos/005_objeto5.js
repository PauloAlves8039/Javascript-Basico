/*
 * Arquivo: 005_objeto5.js
 * Autor: Paulo Alves
 * Descrição: utilizando métodos acessores get e set para manipulação de variáveis
 * Data: 31/10/2019
*/

let _b = 0

let myObj = {
    a: 2,
    get b(){
        console.log('Acesso')
        return _b
    },
    set b(value){
        console.log('Valor Alterado')
        if(value % 2 === 0){
            _b = value
        }        
    }
}

myObj.b = 10
console.log(myObj.b)

