class Avo {
    constructor(sobrenome) { //construtor da classe Avo 
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo { //extendes a classe Avo, pai herda avo
    constructor(sobrenome, profissao = 'Professor') { //construtor da classe Pai que herda de Avo
        super(sobrenome) //super é uma palavra reservada que chama o construtor da classe pai, ou seja, ele chama a superclasse de pai, que e a classe do avo
        this.profissao = profissao
    }
}

class Filho extends Pai{//
    constructor() {
        super('Silva') //chama a superclasse do pai que é sobrenome, que é a superclasse do avo
    }
}

const filho = new Filho
console.log(filho)