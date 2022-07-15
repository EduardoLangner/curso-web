function MeuObjeto(){}
console.log(MeuObjeto.prototype) // retorna o protótipo do objeto

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__) // retorna true
console.log(MeuObjeto.prototype === obj1.__proto__) // retorna true

MeuObjeto.prototype.nome = 'Ana'
MeuObjeto.prototype.falar = function(){
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}

obj1.falar()

obj2.nome = 'Bia'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype // obj3 herda o protótipo do objeto MeuObjeto
obj3.nome = 'Carla'
obj3.falar()
