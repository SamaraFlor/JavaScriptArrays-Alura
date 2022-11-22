const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

// Primeira expressão: é executada apenas uma única vez
for (let i = 0; 
 // Segunda expressão: condição de execução   
    i < notas.length; 
//Terceira expressão: é executada sempre ao final do bloco   
    i++) 
    {

//soma
  somaDasNotas += notas[i];
}
 // media
const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`);