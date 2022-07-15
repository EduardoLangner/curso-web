const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(i in nums){
    if(i == 5){ // para de imprimir quando chegar no indice 4
        break
    }
    console.log(`i = ${i}`)
}

for(j in nums){
    if(j == 5){ // para de imprimir quando chegar no indice 4 e volta a imprimir no 6
        continue
    }
    console.log(`j = ${j}`)
}