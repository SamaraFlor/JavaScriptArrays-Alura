const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "1122233345",
    email: "andre@dominio.com",
  };
  
//   console.log(
//    `O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos.`
//   );
  
  const chaves = ["nome", "idade", "cpf", "email"];
  
  chaves.forEach((chave) => {
    //sintaxe de colchetes podemos acessar campos que não temos acesso no momento em que estamos 
    //escrevendo o código. Com isso, flexibilizamos o uso das chaves, das propriedades e dos objetos.
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
  });

  //--------------------------------------------------------------------------------------------
  const alunos = {
    nome: "Aline",
    idade: 12,
    turma: "4A",
    professora: "Maria",
  }

  const informacoes = ["nome", "idade", "turma", "professora"];

  informacoes.forEach((informacoes)=>{
    console.log(`Aluno ${informacoes} tem valor ${alunos[informacoes]}`);

  });