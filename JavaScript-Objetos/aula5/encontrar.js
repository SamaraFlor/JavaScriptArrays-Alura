const clientes = require(`./cliente.json`);

// pegar o item dentro desta chave e verificar se e correspondente ao valor
function encontrar(lista, chave, valor) {
  return lista.find((item) => item[chave] === valor);
}

//passando parametro
const encontrado = encontrar(clientes, "nome", "Kirby");
console.log(encontrado);
// igualdade estrita
//const encontrado2 = encontrar(clientes, "telefone", "1918820860");
/*
Por isso, a comparação de uma string com um array que contém duas strings 
vai retornar falso e o método não encontrará a Amye.
*/
//console.log(encontrado2);

function encontrar(lista, chave, valor) {
    return lista.find((item) => item[chave].includes(valor));
  }

  const encontrado2 = encontrar(clientes, "telefone", "1918820860");
  console.log(encontrado2);