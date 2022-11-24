const pessoa = {
    nome: "Luma",
    profissao: "Engenheira",
  };
  

  // imprime o nome
  console.log(pessoa.nome);
  
  // ficara como undefined pois não definimos o telefone
  console.log(pessoa.telefone);
  
  // atribuindo o telefone 
  pessoa.telefone = "11 2223333444";
  
  // imprimeindo telefone
  console.log(pessoa.telefone);
  

  pessoa.nome = "Luma Silva";
  
  console.log(pessoa);
  

  const novaPessoa = {
    nome: "Pedro",
  };
  
  // não conseguimos reatribui valor, conseguimos apenas manipular o objeto 
  // com let conseguimos
  pessoa = novaPessoa;

  console.log(pessoa);