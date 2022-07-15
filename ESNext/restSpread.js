//operador ...rest(juntar)/spread(espalhar) 
//usar o rest como parâmetro de função como no exemplo da revisão 2

//usar spread como objeto 
const funcionario = { 
    nome: 'Maria', 
    salario: 12348.99   
}
const clone = { 
    ativo: true,
     ...funcionario  //pego todos os atributos do objeto funcionario e espalho no clone
}
console.log(clone)

//usar spred em um array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFInal = ['Maria', ...grupoA, 'André']
console.log(grupoFInal)