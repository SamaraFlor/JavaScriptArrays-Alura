const notas = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;

// serve para percorrer tds os elementos do array
//é como se estivéssemos dizendo: para cada elemento de notas, 
//execute o código que está dentro das chaves. 
//O for of é muito adequado para utilizarmos com arrays.
for (let nota of notas) {
  somaDasNotas += nota;
}

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`);

//---------------------------------------------------------------------------------------
//Por exemplo, podemos percorrer um array do fim ao início:
const numeros = [100, 200, 300, 400, 500, 600];

for (let i = numeros.length - 1; i >= 0; i--) {
  console.log(numeros[i]);
}

//-------------------------------------------------------------------------------------------
//Outra possibilidade é alterar a quantidade incrementada ou decrementada, 
//utilizando o mesmo código acima, mas alterando o decremento para i -= 2. 
//Então, teremos o seguinte:

const numeros1 = [100, 200, 300, 400, 500, 600];

for (let i = numeros1.length - 1; i >= 0; i -= 2) {
  console.log(numeros1[i]);
}

//------------------------------------------------------------------------------------------
const numerosPares = [];
// pode ser utilizada para repetir qualquer instrução conforme a necessidade. 
//Por exemplo, podemos criar dinamicamente um array com todos os números pares de 0 a 100:
for (let i = 0; i <= 100; i += 2) {
  numerosPares.push(i);
}

console.log(numerosPares);
