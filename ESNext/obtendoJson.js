//o objetivo é obter 3 arquivos json de 3 turmas diferente 
//usando callbacks aninhadas
// vou utilizar a URL (http://files.cod3r.com.br/curso-js/turmaA.json
// http://files.cod3r.com.br/curso-js/turmaB.json
// http://files.cod3r.com.br/curso-js/turmaC.json)
// eu vou chamar a função obterAlunos e passar como parâmetro o nome da turma

const http = require('http')

const getTurma = (turma, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${turma}.json` //url do arquivo json usando tamplate string para pegar a turma
    http.get(url, res => { //http.get é uma função que recebe uma url e retorna uma promessa
        let resultado = '' //crio uma variável que vai receber o conteúdo do arquivo json
        res.on('data', dados => { //res.on é uma função que recebe um evento e uma função 
            resultado += dados //concateno o conteúdo do arquivo json
        })
        res.on('end', () => { //res.on é uma função que recebe um evento e uma função
            callback(JSON.parse(resultado)) //chamo a função callback passando como parâmetro o conteúdo do arquivo json
        })
    })
}

let nomes = []
getTurma('A', alunos => { //chamo a função getTurma passando como parâmetro a turma e pegando todos seus alunos
    // console.log(alunos)
    // console.log(alunos[0].nome) //mostro o primeiro aluno da turma A
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`)) //concateno o nome dos alunos da turma A em um array
    getTurma('B', alunos => { //chamo a função getTurma passando como parâmetro a turma B e pegando todos seus alunos
        nomes = nomes.concat(alunos.map(b => `B: ${b.nome}`)) //concateno o nome dos alunos da turma A em um array
        getTurma('C', alunos => { //chamo a função getTurma passando como parâmetro a turma C e pegando todos seus alunos)
            nomes = nomes.concat(alunos.map(c => `C: ${c.nome}`)) //concateno o nome dos alunos da turma A em um array
            console.log(nomes) //mostro o array com todos os nomes
        })
    })
})