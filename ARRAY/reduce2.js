const aluno = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 6.8, bolsista: true}
]

//retornar se todos os alunos são bolsistas
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(aluno.map(a => a.bolsista).reduce(todosBolsistas))

// retornar quem é bolsista

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(aluno.map(a => a.bolsista).reduce2(algumBolsista))