/*
 * Arquivo: 017-classe-parte2.js
 * Autor: Paulo Alves
 * Descrição: exemplo do uso de herança com classe.
 * Data: 01/03/2020
*/

class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)