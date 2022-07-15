const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice) { //o foreach vai percorrer os indices do array e a cada indice que char vai mostar o indice e o nome
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome)) //o foreach vai percorrer os indices do array e a cada indice que char vai mostaro nome
