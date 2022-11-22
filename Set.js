const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// instanciar set pois ele não deixa informações se repetirem no array
//const meuSet = new Set(nomes);

// pode ser escrito assim
const nomesAtualizados = [...new Set(nomes)];
console.log(nomesAtualizados);


const numeros = [1,8,9,7,9,3,3,4,5,4]

const numerosAtualizados = [...new Set(numeros)];

console.log(numerosAtualizados);


//------------------------------------------------------------
var texto = 'India';

var meuSet = new Set(texto);  
//tamanho do array
meuSet.size;  

console.log(texto);

//---------------------Relação com objetos Array---------------------------------

var myArray = ["ana", "julia", "maria"];

// Use o construtor regular de Set para transformar um array dentro de um Set
var mySet = new Set(myArray);

mySet.has("ana"); // retorna true


console.log(mySet);
