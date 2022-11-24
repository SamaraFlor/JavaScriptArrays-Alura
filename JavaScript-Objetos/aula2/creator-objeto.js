const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
   }

//   const objPersonagem3 = objPersonagem
//    objPersonagem3.nome = "Gandalf, o Cinzento"

//   console.log(objPersonagem.nome) //Gandalf, o Cinzento
//   console.log(objPersonagem3.nome) //Gandalf, o Cinzento

/*
A variável objPersonagem2 não fez uma cópia do objeto original, 
apenas serviu como referência para o objeto original objPersonagem. 
Assim, qualquer alteração em qualquer um dos objetos altera ambos. 
Isso porque o JavaScript, quando trabalha com objetos, 
acessa os valores deles fazendo referência ao original. mas não cria uma cópia.
*/



   // -----------------------Alterar com creator---------------------
   const objPersonagem2 = Object.create(objPersonagem)
   objPersonagem2.nome = "Gandalf, o Cinzento"

   /*
   O método Object.create() cria um novo objeto utilizando 
   como protótipo o objeto passado via parâmetro. Dessa forma, 
   objPersonagem2 é uma instância diferente de 
   objPersonagem e pode ser trabalhada de forma independente.
   */ 
   
   console.log(objPersonagem.nome) //Gandalf
   console.log(objPersonagem2.nome) //Gandalf, o Cinzento