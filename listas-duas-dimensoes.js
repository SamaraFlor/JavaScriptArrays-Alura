const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

//resultado são duas listas
//[ 'João', 'Juliana', 'Ana', 'Caio' ], [ 10, 8, 7.5, 9 ] ]
const listaDeAlunosEMedias = [alunos, medias];
console.log(listaDeAlunosEMedias);

// quando temos duas listas primeiro passamos o parametro da primeira depois da segunda
console.log(
    `A aluna da posição 1 da lista de alunos é: ${listaDeAlunosEMedias[0][1]}.
    A nota dessa aluna é ${listaDeAlunosEMedias[1][1]}.
    `
  );


  console.log("---------------------------------------------------Arrays duas dimensoes-------------------------------------------------------")

const nomes = ["Ana", "Juliana", "Leonardo"];
const idades = [30, 35, 28];
const faculdade = [false, true, true];
const funcionarios = [nomes, idades, faculdade];
console.log(funcionarios);
// PARAMETROS LISTA NOMES 
//     0        1         2
// 0  ana   juliana   leonardo   nome  0
// 1  30      35        28       idade 1 
// 2   f      t          t       facul 2

//primeiro nome [0]coluna
//              [1]Juliana

//segundo nome  [0]coluna
//              [2]Leonardo

console.log(
    `o Funcionaria da posição 1 : ${funcionarios[0][1]}.
     A idade  é ${funcionarios[1][1]}.
    "trabalha na faculdade ${funcionarios[2][1]}.
    `
  );

  console.log("----Segunda posição----");
  console.log(
  `O funcionaria da posição 2  é: ${funcionarios[0][2]}.
  A idade  é ${funcionarios[1][2]}.
 "trabalha na faculdade ${funcionarios[2][2]}.
 `
 );

 console.log("----primeira----");
 console.log(
 `O funcionaria da posição   é: ${funcionarios[0][0]}.
 A idade  é ${funcionarios[1][0]}.
"trabalha na faculdade ${funcionarios[2][0]}.
`
);


