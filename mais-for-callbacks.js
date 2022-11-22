
//------------------------for----------------------------------------------------------------------
console.log("for"); 
const lista = [1, 2, 3, 4, 5];

for (let indice = 0; indice < lista.length; indice++) {
 console.log(lista[indice]); 
}

console.log("for somando"); 
const lista1 = [1, 2, 3, 4, 5];

for (let i = 0, j = 0; i < lista1.length; i++, j++) {
 console.log(lista1[i] + j); 
}
//-----------------------------for of-----------------------------------------------------
console.log("for of"); 

const lista2 = [1, 2, 3, 4, 5];
let soma = 0;

for (let elemento of lista2) {
 soma += elemento;
}

console.log(soma) //15

//--------------------------------forEach()------------------------------------------
const lista3 = [1, 2, 3, 4, 5];
let soma1 = 0;

lista3.forEach(numero => soma1 += numero);
console.log(soma1) //15
