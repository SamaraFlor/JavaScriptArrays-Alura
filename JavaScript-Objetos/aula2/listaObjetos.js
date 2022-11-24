const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["1155555550", "1144444440"],
};

cliente.enderecos = [
  {
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
  },
];

//adicionando enderecos
cliente.enderecos.push({
  rua: "R. Joseph Ladder",
  numero: 404,
  apartamento: false,
});

cliente.enderecos.push({
  rua: "av eusebio",
  numero: 42,
  apartamento: false,
});




// para filtrar somente apartamentos
const listaApenasApartamentos = cliente.enderecos.filter(
  (endereco) => endereco.apartamento === true
);

console.log(listaApenasApartamentos);

// para filtrar casas
const listaCasas = cliente.enderecos.filter( 
  (endereco)=> endereco.apartamento != true 

);

console.log(listaCasas);