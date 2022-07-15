 const escola = "Cod3r"

console.log(escola.charAt(4)) // retorna o caracter da posição 4
console.log(escola.charCodeAt(3)) // retorna o código do caracter da posição 3 (ASCII)
console.log(escola.indexOf('3')) // retorna a posição do caracter '3'
console.log(escola.substring(1)) // retorna a partir da posição 1
console.log(escola.substring(0, 3)) // retorna a partir da posição 0 até a posição 3
console.log('Escola '.concat(escola).concat('!')) // concatena strings
console.log('Escola ' + escola + '!') // concatena strings
console.log(escola.replace(3, 'e')) // substitui o caracter da posição 3 pelo caracter 'e'
console.log(escola.replace(/\d/, 'e')) // substitui todos os digitos no texto pela letra 'e'
console.log(escola.replace(/\w/g, 'e')) // substitui todos os caracteres no texto pela letra 'e'
console.log('Ana,Maria,Pedro'.split(',')) // divide a string em um array pelo caracter ','
