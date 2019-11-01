/*
 * Arquivo: 006_objeto6.js
 * Autor: Paulo Alves
 * Descrição: declarando objeto para simular movimentação de elemento em um tabuleiro
 * Data: 31/10/2019
*/

/*
 * Tabela declarada para uso dos campos da tabuleiro
 * Funções para manipular o posicionamento do elemento
*/
let Table = {
    field:[
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ],
    position: [0, 0],

    up(){
        if(this.position[0] > 0){
            this.position[0]--
        }
        this.print()
    },

    down(){
        if(this.position[0] < this.field.length -1){
            this.position[0]++
        }
        this.print()
    },

    left(){
        if(this.position[1] > 0){
            this.position[1]--
        }
        this.print()
    },

    right(){
        if(this.position[1] < this.field[this.position[0]].length -1){
            this.position[1]++
        }
        this.print()
    },

    print(){
        let lineStr = ''
        for(let i = 0; i < this.field.length; i++){
            let line = this.field[i]
            for(let j = 0; j < line.length; j++){
                if(this.position[0] === i && this.position[1] === j){
                    lineStr += '| X |'
                }else{
                    lineStr += '|   |'
                }
            }
            lineStr += '\n'
        }
        console.log(lineStr)
    }
}

Table.up()
Table.down()
Table.right()
Table.left()
// Table.print()