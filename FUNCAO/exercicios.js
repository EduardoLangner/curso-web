// /*Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
// multiplicação e divisão desses valores*/

// //Normal
// function exe1(a, b) {
//     console.log(`${a + b} | ${a - b} | ${a * b} | ${a / b}`)
// }
// exe1(2, 3)
// //Arrow
// exe1 = (a, b) => { console.log(`${a + b} | ${a - b} | ${a * b} | ${a / b}`)}
// exe1(2, 3)


// /*Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo)*/

// //normal
// function triângulo(a, b, c) {
//     if (a === b && b === c) {
//         console.log('Equilátero')
//     } else if (a === b || b === c || a === c) {
//         console.log('Isósceles')
//     } else {
//         console.log('Escaleno')
//     }
// }
// triângulo(2, 2, 2)
// //Arrow
// triângulo = (a, b, c) => {
//     if (a === b && b === c) {
//         console.log('Equilátero')
//     } else if (a === b || b === c || a === c) {
//         console.log('Isósceles')
//     } else {
//         console.log('Escaleno')
//     }
// }
// triângulo(2, 2, 2)

// /*Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente*/

// //normal
// function eleva(base, expoente){
//     console.log(Math.pow(base,expoente))
// }
// eleva(2,2)
// //arrow
// eleva = (base, expoente) => {console.log(Math.pow(base,expoente))}
// eleva(2,2)

// /*Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
// e o resto da divisão destes dois valores*/

// //Normal
// function divide(a, b){
//     console.log(`Resultado: ${a / b}, Resto: ${a % b}`)
// }
// divide(2,2)
// //Arrow
// divide = (a, b) => { console.log(`Resultado: ${a / b}, Resto: ${a % b}`)}
// divide(2,2)

// /*) Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o
// seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
// importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
// um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para
// que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto)*/

// //Normal
// function arredonda(a, b){
//     console.log(`R$${(a+b).toFixed(2).replace(".", ",")}`)
// }
// arredonda(0.1, 0.2)
// //Arrow
// arredonda = (a, b) => { console.log(`R$${(a+b).toFixed(2).replace(".", ",")}`)}
// arredonda(0.1, 0.2)

// /*) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos*/

// function jurosSimples(capInicial, juros, tempo){
//     let jurosTotal, montante
//     jurosTotal = capInicial * juros * tempo
//     montante = capInicial + jurosTotal
//     console.log(montante)
// }

// function jurosCompostos(capInicial, juros, tempo){
//     let montante = capInicial * Math.pow(1 + juros, tempo)
//     console.log(montante)
// }

// jurosSimples(1200, 0.02, 14)
// jurosCompostos(1200, 0.02, 14)


/* Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo*/

// function bhaskara(a, b, c){
//     let delta = Math.pow(b, 2) - 4 * a * c
//     if(delta < 0){
//         console.log('Delta é negativo')
//     } else {
//         let x1 = (-b + Math.sqrt(delta)) / (2 * a)
//         let x2 = (-b - Math.sqrt(delta)) / (2 * a)
//         console.log([x1, x2])
//     }
// }
// bhaskara(3, -5, 12)


 /*) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo)*/

// function basquete(lista){
//     let pontuacao = lista.split(' ')
//     let maior = pontuacao[0]
//     let menor = pontuacao[0]
//     let maiorNum = 0
//     let menorNum = 0
//     for(let i = 0; i < pontuacao.length; i++){
//         if(pontuacao[i] > maior){
//             maior = pontuacao[i]
//             maiorNum = i + 1
//         }
//         if(pontuacao[i] < menor){
//             menor = pontuacao[i]
//             menorNum = i + 1
//         }
//     }
//     console.log([maiorNum, menorNum])
// }
// basquete('10 20 20 8 25 3 0 30 1')

/* Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado*/

// function notas(lista){
//     let notas = lista.split(' ')
//     let reprovados = 0
//     let aprovados = 0
//     for(let i = 0; i < notas.length; i++){
//         if(notas[i] < 40){
//             reprovados++
//         } else {
//             if(notas[i] - (Math.floor(notas[i] / 5) * 5) < 3){
//                 notas[i] = Math.floor(notas[i] / 5) * 5
//             }
//             aprovados++
//         }
//     }
//     console.log([aprovados, reprovados])
// }
// notas('84 85 60 90 70 80')

/*) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false*/

// function ehInteiro(num){
//     if(num % 3 == 0){
//         console.log(true)
//     } else {
//         console.log(false)
//     }
// }
// ehInteiro(9)

/*Calcular o fatorial de um número*/

// function fatorial(numero){
//     let fatorial = 1
//     for(let i = numero; i > 1; i--){
//         fatorial *= i
//     }
//     console.log(fatorial)
// }
// fatorial(5)

/*Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch*/

// function dia(num){
//     switch (num){
//         case 1 || 7 || 8 || 14 || 15 || 21 || 22 || 28 || 29:
//             console.log('Dia inválido')
//             break;
//         default:
//             console.log('Dia Util') 
//     }
// }
// dia(2)

/*14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console*/

// function fruta(tipo){
//     switch (tipo){
//         case 'maça':
//             console.log('\nNão vendemos esta fruta aqui')
//             break
//         case 'kiwi':
//             console.log('\nEstamos com escassez de kiwis')
//             break
//         case 'melancia':
//             console.log('\nAqui está, são 3 reais o quilo')
//             break
//         default: console.log('ERROR 404')
//     }
// }
// fruta('pinto')


/*) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”*/

// function carro(tipo){
//         switch (tipo){

//             case 'hatch':
//                 console.log('\nCompra efetuada com sucesso')
//                 break
//             case 'sedans':
//                 console.log('\nTem certeza que não prefere este modelo?')
//                 break
//             case 'motocicletas':
//                 console.log('\nTem certeza que não prefere este modelo?')
//                 break
//             case 'caminhonetes':
//                 console.log('\nTem certeza que não prefere este modelo?')
//                 break
//             default: console.log('Não trabalhamos com este tipo de automóvel aqui')
//         }
//     }
//     carro('caminhonetes')


/*Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.*/

// function calculadora(num1, operador, num2){
//     switch (operador){
//         case '+':
//             console.log(num1 + num2)
//             break
//         case '-':
//             console.log(num1 - num2)
//             break
//         case '*':
//             console.log(num1 * num2)
//             break
//         case '/':
//             console.log(num1 / num2)
//             break
//         default: console.log('Operação inválida')
//     }
// }

/*17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e impprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido*/

// function aumento(plano, salario){
//     switch (plano){
//         case 'A':
//             console.log(salario * 1.1)
//             break
//         case 'B':
//             console.log(salario * 1.15)
//             break
//         case 'C':
//             console.log(salario * 1.2)
//             break
//         default: console.log('Plano inválido')
//     }
// }
// aumento('A', 1000)

/*) O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução som*/

// function lanchonete(codigo, quantidade){
//     switch (codigo){
//         case 100:
//             console.log(quantidade * 3)
//             break
//         case 200:
//             console.log(quantidade * 4)
//             break
//         case 300:
//             console.log(quantidade * 5.5)
//             break
//         case 400:
//             console.log(quantidade * 7.5)
//             break
//         case 500:
//             console.log(quantidade * 3.5)
//             break
//         case 600:
//             console.log(quantidade * 2.8)
//             break
//         default: console.log('Código inválido')
//     }
// }
// lanchonete(600, 2)

/*Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1*/

/*) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130*/

// function idade(num){
//     if(num >0 && num <10){
//         console.log('R$ 80,00')
//     }else if(num >=10 && num <30){
//         console.log('R$ 50,00')
//     }else if(num >=30 && num <=60){
//         console.log('R$ 95,00')
//     }else{
//         console.log('R$ 130,00')
//     }
// }
// idade(10)

/*Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo*/

// function notas(codigo, nota1, nota2, nota3){
//     let media = (nota1 + nota2 + nota3) / 3
//     if(media >= 5){
//         console.log(`Código: ${codigo} Notas: ${nota1}, ${nota2}, ${nota3} Média: ${media} Aprovado`)
//     }else{
//         console.log(`Código: ${codigo} Notas: ${nota1}, ${nota2}, ${nota3} Média: ${media} Reprovado`)
//     }
// }
// notas(1, 7, 8, 9)

/*) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.*/

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
// let impar = 0, par = 0

// for(let i = 0; i < num.length; i++){
//     if(num[i] % 2 == 0){
//         par++
//     }else{
//         impar++
//     }
// }
// console.log(`${par} números são pares e ${impar} números são impares`)

/*Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.*/

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,]
// let dentro = 0, fora = 0

// for(let i = 0; i < num.length; i++){
//     if(num[i] >=10 && num[i] <=20){
//         dentro++
//     }else{
//         fora++
//     }
// }
// console.log(`${dentro} números estão dentro do intervalo [10,20] e ${fora} números estão fora`)

/*Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.*/

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,]
// let maior = 1, menor = 1

// for(let i = 0; i<num.length; i++){
//     if(num[i] > maior){
//         maior = num[i]
//     }else if(num[i] < menor){
//         menor = num[i]
//     }
// }
// console.log(`O maior número é ${maior} e o menor é ${menor}`)

/*) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console*/

// let num = [1, 2, -3, 4, 5, 6, 7, -8, 9, -10, -11, 12, -13, 14, 15, 16, 17, 18, -19, 20, 21, 22, -23, 24, 25,]
// let negativo = 0

// for(let i = 0; i<num.length; i++){
//     if(num[i] < 0){
//         negativo++
//     }
// }
// console.log(`Existem ${negativo} números negativos`)

/*Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor*/

// function impares(inicio, fim){
//     if(inicio > fim){
//         let aux = inicio
//         inicio = fim
//         fim = aux
//     }
//     for(let i = inicio; i <= fim; i++){
//         if(i % 2 != 0){
//             console.log(i)
//         }
//     }
// }
// impares(0, 100)