Array.prototype.meuForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.meuForEach(function(nome, indice) { //o foreach vai percorrer os indices do array e a cada indice que char vai mostar o indice e o nome
    console.log(`${indice + 1}) ${nome}`)
})
 