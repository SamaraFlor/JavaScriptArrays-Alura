const notas = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;
/*callback significa "chamar de volta". tem esse nome porque é uma função que estamos 
guardando de alguma forma na lógica interna do forEach e ela vai ser chamada de volta 
em determinados momentos. Mais especificamente, ela será chamada para cada elemento do array de notas
*/
notas.forEach(function (nota) {
    somaDasNotas += nota;
});

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`);

/*
o forEach tem uma lógica parecida com o for of, ele fornece diretamente o valor do elemento 
do array, que nesse caso nomeamos de nota, 
e ele também sempre vai do início ao fim do array.
*/

//------------------------------------------------------------------------------------

const notas1 = [10, 6.5, 8, 7.5];

let somaDasNotas1 = 0;

notas1.forEach(function (nota, indice) {
  somaDasNotas1 += nota;
    console.log(indice)
});

const media1 = somaDasNotas1 / notas1.length;

console.log(`A média das notas é ${media1}.`);