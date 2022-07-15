// erve para transformar um array em um unico valor, outro array, um objeto, etc
// o reduce vai trabalhar com os dois primeiros valores do array, e o resultado vai para o terceiro, e assim por diante até o final

const aluno = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 6.8, bolsista: true}
]

console.log(aluno.map(a => a.nota)) // me retorna um array com todas as notas

const resultado = aluno.map(a => a.nota).reduce(function(acumulador, atual){ 
// o reduce vai pegar o acumulador(primeiro indice) e o atual(egundo indice), e vai somar, ai o reultado da soma ele vai somr com o terceiro
    console.log(acumulador, atual)
    return acumulador + atual
},0) // o 0 é o valor inicial do acumulador

console.log(resultado)