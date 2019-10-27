/*
 * Arquivo: 006_forEncadeado.js
 * Autor: Paulo Alves
 * Descrição: formando uma pirâmide com o laço 'for' encadeado
 * Data: 27/10/2019
*/

for(let i = 0; i < 10; i++){
    let linha = ''
    for(let j = 0; j < i; j++){
        linha += '*';
    }
    console.log(linha)
}
for(let i = 10; i > 0; i--){
    let linha = ''
    for(let j = 0; j < i; j++){
        linha += '*';
    }
    console.log(linha)
}
