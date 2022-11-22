const notas = [7, 7, 8, 9];


//pread operator é um operador que podemos usar para clonar arrays 
//sem ter problemas de referências do JavaScript.
const novasNotas = [...notas, 10];

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);


const nomes = ["luiza", "Fernanda", "Aline"];

const novosNomes = [...nomes,"Karina", "Hellena"];
console.log(`Os nomes originais são ${nomes}`);
console.log(`Os nomes atuais são ${novosNomes}`);
