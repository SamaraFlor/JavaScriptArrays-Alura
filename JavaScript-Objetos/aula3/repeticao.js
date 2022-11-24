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


  /*
  Para incluir um filtro, checamos o tipo do objeto. 
  Para isso, criaremos uma variável let tipo dentro do laço de repetição 
  for e antes do console log, para salvar o tipo: let tipo = typeof cliente[chave];.
  */
  for (let chave in cliente) {
    let tipo = typeof cliente[chave];
    if (tipo !== "object" && tipo !== "function") {
      console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }
  }

 