const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json' // lista de funcionarios que estão no servidor da cod3r, um servidor remoto
//axios é uma biblioteca que faz requisições http, nesse caso vaio fazer uma requisição para o arquivo funcionarios.json que está na url acima
const axios = require('axios') // está dentro da pasta node_modules n preciso usar ./

const chineses = function(funcionario){
    return funcionario.pais === 'China' && funcionario.genero === 'F'
}

const menorSalario = function(funcionario, funcionarioAtual){ // funcão reduce
    return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual // se o funcionario.salario for menor que o funcionarioAtual.salario, retorna o funcionario, senão retorna o funcionarioAtual
}

axios.get(url).then(response => { // o then é o que vai executar quando a requisição for bem sucedida e o response é o objeto que vem do servidor 
    const funcionarios = response.data // o data é o objeto que vem do servidor
    //console.log(funcionarios) // mostra todos os funcionarios
    const func = funcionarios.filter(chineses).reduce(menorSalario) // o filter é para filtrar os funcionarios, o reduce é para pegar o menor salário
    console.log(func)
})

// retornar todas as mulheres chinesas com o menor salário  (da linha 5 até a linha 11)