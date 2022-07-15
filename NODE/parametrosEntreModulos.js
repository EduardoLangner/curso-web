module.exports = function(...nomes){ // ...nomes significa que recebe um número indefinido de parâmetros
    return nomes.map(nome => `Boa semana ${nome}!`) 
}