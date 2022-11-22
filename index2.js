let num1 = 10;
let num2 = num1;

/*
 JavaScript entende que queremos criar uma cópia de num1, 
 e cria uma nova variável, com seu próprio espaço na memória guardando seu valor. E
 ntão, ao modificar uma das variáveis, a outra não é alterada.

 Esse comportamento de copiar um valor primitivo, 
 o atribuindo a uma nova variável, é chamado de atribuição por valor e acontece somente 
 com os tipos primitivos do JavaScript.
*/
num2 += 5;
num1 += 1;

console.log(`Num1 é ${num1}. Num2 é ${num2}`);

//-------------------------------------------------------------------------------
/*
O mesmo comportamento ocorre quando trabalhamos com parâmetros de funções. 
Veja o seguinte exemplo:
*/

let numeroOriginal = 10;

function alteraNumero(numero) {
  numero = 50;

  console.log(`numero do parâmetro é ${numero}. numeroOriginal é ${numeroOriginal}`);
}

alteraNumero(numeroOriginal);


//-----------------------------------------------------------------------------------
const notas = [7, 7, 8, 9];

const novasNotas = notas;

novasNotas.push(10);

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);