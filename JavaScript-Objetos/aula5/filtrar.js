const clientes = require("./cliente.json");


// pegar quem não tem complemento e mora em ap
   // encontrar a propriedade .hasOwnProperty 
  

   function filtrarApartamentoSemComplemento(clientes) {
     return clientes.filter((cliente) => {
       return (
         cliente.endereco.apartamento &&
         !cliente.endereco.hasOwnProperty("complemento")
       );
     });
   }
   
   const filtrados = filtrarApartamentoSemComplemento(clientes);
   
   console.log(filtrados);