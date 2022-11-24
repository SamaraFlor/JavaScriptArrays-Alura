const cliente = {
    // nome: "Joao",
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
Retorna os nomes das propriedades e métodos de string enumeráveis ​​de um objeto.
@param o — Objeto que contém as propriedades e métodos. 
Pode ser um objeto que você criou ou um objeto DOM (Document Object Model) existente.
  */
  const chavesDoObjeto = Object.keys(cliente);

  console.log(chavesDoObjeto);
  
  if (!chavesDoObjeto.includes("enderecos")) {
    console.error("Erro. É necessário ter um endereço cadastrado.");
  }

  if (!chavesDoObjeto.includes("nome")) {
    console.error("Nome precisa ser cadastrado")
    
  }

