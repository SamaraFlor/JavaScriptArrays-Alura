const numerosPares = [2, 4, 6];
const numerosImpares = [1,3,5];

// os ... é do destruct e ele traz os numeros e não o array
const numeros = [...numerosImpares, ...numerosPares];
console.log(numeros);

// destructit, podemos ja colocar na constante ao inves de declarar num1 = 1 e num2 =2
 //const [num1,num2]= [1,2];
 //console.log(num1,num2);  
 //--------------------------------------------------------------------------------------------
 
 // Com os ... conseguimos colocar todos os outros numeros na variavel outrosNumeros
 //1 2 [ 3, 4, 6, 7, 8 ]
 const [num1,num2,...outrosNumeros]= [1,2,3,4,6,7,8];
 console.log(num1,num2,outrosNumeros);    

 // Conseguimos colocar valor padrão
const [nome1 ="Samara"]=[];
console.log(nome1);


// conseguimos adicionar informações criando outra variavel e juntando os arrays com ...
const pessoa = {
    nome: 'Samara',
    idade:34
}

const pessoaComTelefone = {
    ...pessoa,
    telefone: 1135678545
}
console.log(pessoaComTelefone);
console.log(pessoa);

//---------------------------------------------------------------------------------
//variavel nome, consigo trazer o nome com .nome
//const nome = pessoa.nome;
//console.log(nome);

// ele cria uma variavel e pega o nome atribuido 
//const { nome } = pessoa
//console.log(nome);

//---------------------------------------------------------------------------------

// conseguimos fazer tambem com funções
/*function imprimeDados(dados){
    // conseguimos fazer uma const para atribuir estes dados, Não imprime mais como objto
    // imprime Samara 34
    const { nome,idade }= dados
    console.log(nome,idade);
}*/

function imprimeDados({ nome,idade })
{
 console.log(nome,idade);
}
imprimeDados(pessoa);