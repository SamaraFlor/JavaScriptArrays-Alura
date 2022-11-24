const pessoa = {
    nome:"Bruce Banner",
    dataNascimento:"25/01/1980",
    carteiraIdentidade:"997776-X",
    email:"profbanner@email.com",
    telefone:"+552877776666",
    cidade:"Cachoeiro de Itapemirim",
    estado:"ES"
 }

 /*
 Usando a representação do objeto pessoa, foi solicitado que adicionássemos os campos 
 - seguro social e cpf no formato string. 
 Além disso, quando forem exibidas as informações da pessoa em um relatório, 
 deverão aparecer somente os 4 primeiros dígitos do CPF e da carteira de identidade.
 */

 pessoa.seguroSocial = "2345678Ac";
 pessoa.cpf = "3554526534"


 console.log(`os  3 primeiros digitos do CPF são ${pessoa.cpf.substring(0, 4)}`);
 console.log(`os  3 primeiros digitos do  RG são ${pessoa.carteiraIdentidade.substring(0, 4)}`);
  console.log(
`O nome da pessoa é ${pessoa.nome} e essa pessoa nasceu em  ${pessoa.dataNascimento} 
 O email da pessoa é ${pessoa.email} telefone para contanto  ${pessoa.telefone} 
 Mora  em  ${pessoa.estado}    na cidade de   ${pessoa.cidade} .`
  );