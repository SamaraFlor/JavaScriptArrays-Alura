const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

// quando e retorno eu posso tirar a palavra return
const nomesPadronizados = nomes.map((nome) => nome.toUpperCase());

console.log(nomesPadronizados);

const padrao = nomes.map((nome) => nome.toLowerCase());
console.log(padrao);

//-------------------------------------------------------------------------------------------------
const nome = "Alura";
let nomeMaiusculas = "";

for (let i = 0; i < nome.length; i++) {
 nomeMaiusculas += nome[i].toUpperCase()
}
console.log(nomeMaiusculas) 


const nomedoCurso = "Fundamentos de JS";
const nomeDaPlataforma = " Alura"

const nomeCompleto = nomedoCurso.concat(nomeDaPlataforma)
console.log(nomeCompleto)  //Fundamentos de JS Alura