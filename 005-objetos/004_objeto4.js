/*
 * Arquivo: 004_objeto4.js
 * Autor: Paulo Alves
 * Descrição: usando operador destructuring para extrair informações de um objeto
 * Data: 31/10/2019
*/

let myObj = {
    a: 2,
    b: 4,
    c: 6
}

/*
 * Acessando o objeto global OBJECT com a função key()
 * Nesse caso o objeto vai retornar um array com todas as chaves
*/
console.log(Object.keys(myObj))

/*
 * Acessando o objeto global OBJECT com a função values()
 * Nesse caso o objeto vai retornar seus respectivos valores
*/
console.log(Object.values(myObj))

/*
 * Verificando propriedade especifica pela chave com a função hasOwnPrpperty() 
 * Caso a propreidade esteja inclusa no objeto é retornado o valor true caso contrário false. 
*/ 
console.log(myObj.hasOwnProperty('d'))

/*
 * Retornando objeto em uma lista com a função entries()
 * O objeto vai ter seus elementos exibidos com chave e valor em um array
*/
console.log(Object.entries(myObj))

/*
 * Selando o objeto com a função seal()
 * Essa função não permite a adição de elementos no objeto
 * Mas o valores dos elementos existentes podem ser alterados
*/
console.log(Object.seal(myObj))

/*
 * Selando o objeto com a função freeze()
 * Essa função não permite a adição e nem a alteração de elementos no objeto
*/
console.log(Object.freeze(myObj))