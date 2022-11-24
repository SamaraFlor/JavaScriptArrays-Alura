const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
   }

   delete objPersonagem.aliado

console.log(objPersonagem.aliado) //undefined


// valor de retorno do operador delete é um booleano, ou seja, 
//retorna sempre true ou false para cada operação
delete objPersonagem.aliado
delete objPersonagem["status"]

console.log(objPersonagem.aliado) //undefined
console.log(objPersonagem.status) //undefined

console.log(objPersonagem);

/*
removeu e o objeto esta assim:
{
 nome: "Gandalf",
 classe: "mago",
 nivel: "20",
}
*/

const delProp = delete objPersonagem.aliado
const delPropInexistente = delete objPersonagem["endereco"]

console.log(delProp) //true
console.log(delPropInexistente) //true
/*
importante notar que ele não retorna false se tentarmos remover, por exemplo, 
uma propriedade que não existe no objeto:
*/