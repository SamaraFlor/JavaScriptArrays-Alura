const notas = [10, 6, 8,5.5 ,10];
// deletando o elemento, ultimo elemento
notas.pop();
const media = (notas [0]  + notas[1] + notas[2] + notas[3]) /notas.length;


console.log(notas.filter(6));
console.log(`A média é ${media}.`);

//-----------concat-----------------
var alpha = ["a", "b", "c"];
var numeric = [1, 2, 3];

// creates array ["a", "b", "c", 1, 2, 3]; alpha and numeric are unchanged
var alphaNumeric = alpha.concat(numeric);
console.log(alphaNumeric);