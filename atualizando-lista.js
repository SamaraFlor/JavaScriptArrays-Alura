const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

// parametros de onde começar, quantos excluem e adiciona Rodrigo
//[ 'João', 'Lara', 'Marjorie', 'Leo' ]
nomes.splice(1,2, "Rodrigo");
console.log(nomes);