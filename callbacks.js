const nomes = ["Evaldo", "Mariana", "Camila"];

//Callback  
nomes.forEach (function(nomes) {
    console.log(nomes)  
})

//arrow funtion (=>)

const sobrenomes = ["Silva", "Pereira", "Santos"];

sobrenomes.forEach((sobrenomes) => {
    console.log(sobrenomes);
  });


  // Com funções
  const apelidos = ["val", "mari", "cami"];

  function imprimeApelido(apelidos) {
    console.log(apelidos);
  }
  
  apelidos.forEach(imprimeApelido);