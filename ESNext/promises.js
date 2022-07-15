//promise é uma função que retorna uma promessa 
function falarDepois(segundos, frase) { 
    return new Promise((resolve, reject) => { //retorna uma promessa
        setTimeout(() => { //setTimeout é uma função que executa uma função após um determinado tempo
            resolve(frase)
        }, segundos * 1000)//multiplico por 1000 para converter de segundos para milisegundos
    })
}

//para usar a função falarDepois, eu preciso chamar a função e passar os parâmetros
falarDepois(3, 'Que legal!')
    .then(frase => {//then é uma função que executa uma função após a promessa ser resolvida
        console.log(frase)
    })

///////////////////////////////////////////////////////////////////////////////////////
//caso eu queira executar uma função após a promessa ser rejeitada, eu posso usar o catch
function falarDepois(segundos, frase) { 
    return new Promise((resolve, reject) => { //retorna uma promessa
        setTimeout(() => { //setTimeout é uma função que executa uma função após um determinado tempo
            reject(frase)
        }, segundos * 1000)//multiplico por 1000 para converter de segundos para milisegundos
    })
}

//para usar a função falarDepois, eu preciso chamar a função e passar os parâmetros
falarDepois(3, 'Não foi dessa vez!')
    .catch(e => {//then é uma função que executa uma função após a promessa ser resolvida
        console.log(e)
    })
