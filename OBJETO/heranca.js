// Cadeia de protótipos (prototype chain)

const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B'} // __proto__ é um atributo que aponta para o protótipo do objeto (pai herda avo)
const filho = { __proto__: pai, attr3: 'C'} // filho herda pai e avo

console.log(filho.attr1) // filho n tem tributo 1 mas pai tem porque herdou do avo
console.log(filho.attr2)
console.log(filho.attr3)

//outra maneira de herdar setPrototypeOf
//criar 3 objetos, aonde ferrari e volvo irão herdar carro

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}` // super é uma palavra reservada que aponta para o protótipo do objeto
    }
}

Object.setPrototypeOf(ferrari, carro) // ferrari herda carro
ferrari.acelerarMais(100)
ferrari.acelerarMais(100)
ferrari.acelerarMais(100)
ferrari.acelerarMais(100)
console.log(ferrari)
console.log(ferrari.status()) // ferrari herda carro.status()


Object.setPrototypeOf(volvo, carro) // volvo herda carro 
volvo.acelerarMais(230) // volvo herda carro.acelerarMais()
console.log(volvo.status()) // não tem velocidade máxima declarada no volvo, então vai herdar da carro