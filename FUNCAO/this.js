// serve para referenciar o objeto atual daquela execução
// this pode variar 

const pessoa = {
    saudacao: 'bom dia',
    falar(){
        console.log(this.saudacao) // this referencia o objeto atual
    }
}
pessoa.falar()


const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) // bind serve para referenciar o objeto atual daquela execução, é o novo this baicamente 
falarDePessoa() 

///////////////////////////////////////////////////////////////////////////////

function Pessoa2() {
    this.idade = 0,

    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000) // aponta para o objeto atual daquela execução que nesse caso é pessoa
}

new Pessoa2  // criei um novo objeto pessoa2 e chamei a função setInterval


//outra maneira 

function Pessoa3() {
    this.idade = 0

    const self = this // criei uma variavel self que recebe o objeto atual daquela execução
    setInterval(function(){
        this.idade++
        console.log(self.idade)
    },1000) 
}

new Pessoa2  // criei um novo objeto pessoa2 e chamei a função setInterval

function comerWeslei(rola){
    console.log(this.nome + ' está comendo ' + rola)
}



