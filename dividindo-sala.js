const alunos =  [
    "Mariana",
    "Gabriela",
    "Ulisses",
    "Carlos",
    "Fernanda",
    "Amelia",
    "Karina",
    "Kaique",
    "Luis",
    "Mario",
    "Felipe",
    "Lucas",
    "Antonio",
    "Pedro",
    "João",
    "Maria",
    "Hellena",
    "Nina",
    "Alice"
];

// slice divide o codigo 
const sala1 = alunos.slice(0,alunos.length/2);
const sala2 = alunos.slice(alunos.length/2);

console.log(sala1);
console.log(sala2);