const numeros = [100, 200, 300, 400, 500, 600];

// Primeira expressão: é executada apenas uma única vez
// Segunda expressão: condição de execução
// Terceira expressão: é executada sempre ao final do bloco

for (let indice = 0; indice < numeros.length; indice++) {
    console.log(numeros[indice]);
}

// for usados entre outras coisas para percorrer arrays, 
//sempre deixar claro qual é a condição de execução do loop(indice < numeros.length;)
// numeros menores que 10
for (let indice = 0; indice <= 10; indice++) {
    console.log(indice);
  }