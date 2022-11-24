const cliente = require(`./cliente.json`);

function ordenar(lista,propriedade) {
    const resultado = lista.sort((a,b) => {
        if (a[propriedade] < b[propriedade]) {
            return -1;
           //a menor que b temos que retornar valor negativo 
        }
        if (a[propriedade] > b[propriedade]) {
            return 1;
           //a maior que b temos que retornar valor negativo 
        }
        return 0;
        //se forem iguais
    })
    return resultado;
}

const ordenarPorNome = ordenar(cliente, 'nome');

console.log(ordenarPorNome)