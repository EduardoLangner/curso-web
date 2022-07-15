require('./objetoGlobal.js');

console.log(MinhaApp.saudacao());
console.log(MinhaApp.nome);
MinhaApp.nome = 'Legal'; // Não funciona porque o onjeto está congelado(freeze)