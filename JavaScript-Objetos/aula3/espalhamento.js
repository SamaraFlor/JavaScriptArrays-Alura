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

// mostrar a mensagem e numeros 
// Ligando para 1155555550
// Ligando para 1144444440

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
  }
  
  // telefone esta como array prec isamos so colocar o indice que queremos []
//   ligaParaCliente(cliente.telefone[0], cliente.telefone[1]);

  //--------------------------------------Espalhamento---------------------------------------

  // aparecera igual 
  ligaParaCliente(...cliente.telefone);

  //-----------------------------------------------------------------------------------------

// aparecera o endereço
// const encomenda = {
//     destinatario: cliente.nome,
//     endereco: cliente.enderecos[0],
//   };

//   console.log(encomenda);

  /*
  que a maneira que devemos enviar esse objeto, não pode ter outro objeto aninhado. 
  Deve ter todos os campos de forma direta,
  */

//   const encomenda = {
//     destinatario: cliente.nome,
//       rua: cliente.enderecos[0].rua,
//       numero:cliente.enderecos[1].numero,
//   };
  
//   console.log(encomenda);
  // assim conseguimos que o objeto venha inteiro { destinatario: 'Joao', rua: 'R. Joseph Climber', numero: 404 }

  //------------------------------------Objeto com espalahamento---------------------------------



const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
  };
  
  console.log(encomenda);