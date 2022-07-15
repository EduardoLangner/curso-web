/*Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
função) e com ponto de exclamação "!" no final.*/
function ola (nome){
    return `Olá, ${nome}!`
}
console.log(ola('João'))

/*Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.*/ 
function AnosParaDias(idadeEmAnos) {
    const diasDoAno = 365
    return diasDoAno * idadeEmAnos
}
console.log(AnosParaDias(1))

/*Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$
X", em que X é o quanto o funcionário ganhou no mês.*/
function salario(horas, valorhora){
    return `Salário igual a R$${horas*valorhora}`
}
console.log(salario(150, 40.5)) 

/*Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.*/

function NomeDoMes(numero){
    switch(numero){
    case 1:
    return "janeiro";
    case 2:
    return "fevereiro";
    case 3:
    return "março";
    case 4:
    return "abril";
    case 5:
    return "maio";
    case 6:
    return "junho";
    case 7:
    return "julho";
    case 8:
    return "agosto";
    case 9:
    return "setembro";
    case 10:
    return "outubro";
    case 11:
    return "novembro";
    case 12:
    return "dezembro";
    }
}
console.log(NomeDoMes(1))

function receberNomeDoMes(numero) { // forma mais inteligente
    const mapeamento = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
    'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    return console.log(mapeamento[--numero])
}
receberNomeDoMes(1)
    

/*Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.*/
function ehMaior(a, b){
    if(a > b) console.log(`${a} é maior do que ${b}`)
    else console.log(`${b} é maior do que ${a}`)
}
ehMaior(4, 2)

/*Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será 1. Se o parâmetro
de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do
tipo ..."*/
function inverso(valor) {
    const tipo = typeof valor
    if (tipo == "boolean") return !valor
    else if (tipo == "number") return -valor
    else
    return `booleano ou número esperados, mas o parâmetro é do tipo ${tipo}`
}
console.log(inverso(true))
console.log(inverso(6))
console.log(inverso("6"))

/*Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se
o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha
"entre" como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro
inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não
considerando se numero é igual a minimo ou a maximo*/

function estaEntre(minimo, maximo, numero, inclusivo = false) {
    if(inclusivo){
        return numero >= minimo && numero <= maximo
    }else{
        return numero > minimo && numero < maximo
    }
}
console.log(estaEntre(10, 100, 50))


/*Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação.*/

function multiplica(a, b){
    return a=+b
}
console.log(multiplica(2,8))

/*Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado.*/

function repete(elemento, vezes){
    let final = []
    for(let i = 0; i<vezes; i++){
        final.push(elemento)
    }
    console.log(final)
}
repete("codigo", 2)

/*Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro*/

function retorna(num){
    let result = "+"
    for(let i = 0; i < num; i++){
        console.log(result)
    }
    
}
retorna(8)

/*Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
array*/

function primeiroUltimo(){
    let vetor = [7,14,"olá"]
    let novovetor = []
    for(let i = 0; i < vetor.length; i++){
        novovetor.push(vetor[i])
    }
    console.log(novovetor.shift(),novovetor.pop())
}
primeiroUltimo()

/*Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro.*/

function filtrarNumeros(array) {
    const resultado = []
    for(let item of array){
        if(typeof item === "number"){
            resultado.push(item)
        }
    }
    return resultado
}
console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20]))

/*Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares*/

function par(array){
    const resultado = []
    for(let i in array)
    if(i % 2 == 0 && array[i] % 2 == 0){
        resultado.push(array[i])
    }
    return resultado
}
console.log(par([10, 70, 22, 43]))

/*A fim de manter o calendário anual ajustado com o movimento de translação da Terra, criou-se os anos
bissextos, que têm 366 dias em vez dos 365 presentes nos anos normais.
Para determinar se um ano é bissexto, é necessário saber se ele é multiplo de 4. Não pode ser múltiplo de 100,
exceto se for também múltiplo de 400.
Com isso em mente, desenvolva uma função que recebe um número correspondente a um ano e retorna se ele
é bissexto ou não.*/

function checarAnoBissexto(ano) {
    const divisivelPorQuatro = ano % 4 == 0
    const divisivelPorCem = ano % 100 == 0
    const divisivelPorQuatrocentos = ano % 400 == 0
    return (divisivelPorQuatro && !divisivelPorCem) || divisivelPorQuatrocentos
}
console.log(checarAnoBissexto(2100))

/*Escreva uma função que receba um array de números e retornará a soma de todos os números desse array*/

function Soma(array){
    let resultado = 0
    for(let i in array){
        resultado += array[i]
    }
    return resultado
}
console.log(Soma([15, 15, 15,]))

/*Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é
possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você
está desenvolvendo no momento é a de somar o total das despesas.
Crie uma função que receba um array de produtos e retorne o total das despesas*/

function despesasTotais(itens) {
    var total = 0
    for (let item of itens)
    total += item.preco
    return total
}
console.log(despesasTotais(([
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
])))


/*Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento,
pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo
usuário.
Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade
indeterminada de números e retorne a média simples desses números.*/

function Media(array){
    let total = 0
    for(let i in array){
        total += array[i]/array.length
    }
    return total
}
console.log(Media([1,2,3,4,5]))

/*Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão
deverá ser de duas casas decimais, arredondando se necessário.*/

function Area(base, altura){
    let area = 0
    area = (base*altura)/2
    return area
}
console.log(Area(10,15).toFixed(2))

/*Criar uma função que receba um array de números e retorne o menor número desse array*/
function numeroMenor(array){
    let menor = array[0]
    for (let i in array){
        if (array[i] < menor)
        menor = array[i]
    }
    return menor
}
console.log(numeroMenor([10, 5, 35, 65]))

/*Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.*/

function ContaPalavras(string){
    return string.split(' ').length
}
console.log(ContaPalavras("Me divirto aprendendo a programar"))

/*Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de
vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar
maiúsculas de minúsculas*/

function contarCaractere(caractereBuscado, frase) {
    let contador = 0
    for (let i = 0; i < frase.length; i++)
    if(frase.charAt(i) == caractereBuscado){
        contador ++
    }
    return contador
}
console.log(contarCaractere("r", "O rato roeu a roupa do rei de roma"))

/*A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para
identificar palavras semelhantes.
Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array
de strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.*/

function Busca(string, array){
    let resultado = []
    for(let i in array){
        if(array[i].includes(string)){
            resultado.push(array[i])
        }
    }
    return resultado
}
console.log(Busca("pro", ["programação", "mobile", "profissional"]))

/*Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
consoantes, ou seja, sem as vogais.*/

function removeVogais(string){
    let resultado = ""
    for(let i in string){
        if(string[i] == "a" || string[i] == "e" || string[i] == "i" || string[i] == "o" || string[i] == "u"){
            resultado += ""
        }
        else{
            resultado += string[i]
        }
    }
    return resultado
}
console.log(removeVogais("casa"))

/*Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao
ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme
exemplo a seguir */

function inverte(objeto){
    let resultado = {}
    for(let i in objeto){
        resultado[objeto[i]] = i
    }
    return resultado
}
console.log(inverte({nome: "João", idade: 20}))

/*Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número
que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que
têm a quantidade de dígitos indicada pelo segundo parâmetro.*/

function quantidadeDigitos(array, numero){
    let resultado = []
    for(let i in array){
        if(array[i].toString().length == numero){
            resultado.push(array[i])
        }
    }
    return resultado
}
console.log(quantidadeDigitos([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 365], 3))

/*Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.*/

function segundoNumeroMaio(array){
    let maior = 0
    let segundoMaior = 0
    for(let i in array){
        if(array[i] > maior){
            segundoMaior = maior
            maior = array[i]
        }
        else if(array[i] > segundoMaior){
            segundoMaior = array[i]
        }
    }
    return segundoMaior
}
console.log(segundoNumeroMaio([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 365]))

/*Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão
num array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto
com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas*/

function notas(objeto){
    let resultado = {}
    for(let i in objeto){
        let media = 0
        for(let j in objeto[i]){
            media += objeto[i][j]
        }
        media = media/objeto[i].length
        resultado[i] = media
    }
    return resultado
}
console.log(notas({
    "João": [10, 10, 10, 10, 10],
    "Maria": [10, 10, 10, 10, 10],
    "Pedro": [10, 10, 10, 10, 10],
    "Ana": [10, 10, 10, 10, 10]
}))

