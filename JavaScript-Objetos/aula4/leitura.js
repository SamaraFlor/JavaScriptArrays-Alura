const dados = require("./cliente.json");

console.log(dados);
console.log(typeof dados);// traz o tipo object

//transformar em string
const clienteEmString = JSON.stringify(dados);
console.log(clienteEmString);
// {"nome":"Joao","email":"joao@firma.com","telefone":["11223344","11922334453"],
//"endereco":{"rua":"R. Joseph Climber","numero":202,"apartamento":true,"complemento":"ap 934"}}
console.log(typeof clienteEmString);//string

console.log(clienteEmString.nome)//undefined
/*
Se fosse um objeto, receberíamos "Joao" no retorno. Mas como é uma 
string que não tem acesso às propriedades do objeto, recebemos "undefined". 
Ou seja, realmente temos um comportamento de string
*/

//---------"Traduzir" a string para objeto-----------------------------------------


const objetoCliente = JSON.parse(clienteEmString);
console.log(objetoCliente);


/*
Conclusões
Conseguimos percorrer todo o caminho:
Ler um arquivo .json;
Transformá-lo em uma string para podermos salvá-lo, t
ransmiti-lo ou usá-lo em alguma outra operação que é comumente realizada com strings;
Por fim, transformamos essa string de volta em um objeto para podermos 
alterar as propriedades e realizar operações comuns do JavaScript.
*/