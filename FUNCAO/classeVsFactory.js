// é uma forma de instanciar objetos, uma forma de criar funções

//criando a classe

class Pessoa {
    constructor(nome, sobrenome){ // o construtor é uma função que é executada quando a classe é instanciada
        this.nome = nome //this.nome é o atributo da classe o this serve para deixar publico
        this.sobrenome = sobrenome
    }

    //Método
    falar(){
        console.log(`Meu nome é ${this.nome} ${this.sobrenome}`)
    }
}
const p1 = new Pessoa('João', 'Silva')
p1.falar()

////////////////////////////

//crindo função factory

const pessoa = function(nome){
    return{
        nome,
        falar(){
            console.log(`Meu nome é ${nome}`)
        }
    }
}
const p2 = pessoa('Maria')
p2.falar()

//Criando a função arrow factory

const pessoaArrow = nome => {
    return {
        nome,
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}
const p3 = pessoaArrow('João')
p3.falar()