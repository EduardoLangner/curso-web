//o objetivo é obter 3 arquivos json de 3 turmas diferente 
//usando promisses
// vou utilizar a URL (http://files.cod3r.com.br/curso-js/turmaA.json
// http://files.cod3r.com.br/curso-js/turmaB.json
// http://files.cod3r.com.br/curso-js/turmaC.json)
// eu vou chamar a função obterAlunos e passar como parâmetro o nome da turma

const http = require('http')

const getTurma = (turma, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${turma}.json` //url do arquivo json usando tamplate string para pegar a turma
    return new Promise((resolve, reject) => { //crio uma promessa
        http.get(url, res => { //http.get é uma função que recebe uma url e retorna uma promessa
            let resultado = '' //crio uma variável que vai receber o conteúdo do arquivo json
            res.on('data', dados => { //res.on é uma função que recebe um evento e uma função
                resultado += dados //concateno o conteúdo do arquivo json
            })
            res.on('end', () => { //res.on é uma função que recebe um evento e uma função))
                try{
                    resolve(JSON.parse(resultado)) //chamo a função resolve passando como parâmetro o conteúdo do arquivo json
                }catch(e){
                    reject(e)
                }
            })
        })
    })
}

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')]) //crio uma promessa que recebe 3 promises
    .then(turmas => [].concat(...turmas)) //concateno todas as promises em um array
    .then(alunos => alunos.map(aluno => aluno.nome)) //pego o nome dos alunos
    .then(nomes => console.log(nomes)) //mostro o array com todos os nomes
    .catch(e => console.log(e.message)) //mostro o erro caso ocorra

getTurma('D').catch(e => console.log(e.message)) //mostro o erro caso ocorra (turma D não existe)