const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
  };

  // posso guardar um objeto dentro de outro objeto
  
  cliente.endereco = {
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
  };

  // mostrar somente ou endereço
  // pode ser por chaves
  console.log(cliente["endereco"]);
  console.log(cliente.endereco);
  console.log(cliente);