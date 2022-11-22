const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno){
    //includes() confere se o elemento passado por parâmetro está incluso em uma lista
    if (listaDeAlunosEMedias[0].includes(aluno)) {
        //o método indexOf() retorna o índice do elemento passado por parâmetro.
        const indice = listaDeAlunosEMedias[0].indexOf(aluno);

        const mediaDoAluno = listaDeAlunosEMedias[1][indice];
        // INFORMAR ALUNO E MEDIA 
        console.log(`${aluno} tem a média ${mediaDoAluno}.`);

    } else {
        //caso contrario, aluno não cadastrado
        console.log("Aluno não encontrado!");
    }
}

exibeNomeENota("Ana");


console.log("Refatorando o codigo");

function exibeNomeENotaRefatorado(aluno){
    if (listaDeAlunosEMedias[0].includes(aluno)) {
        //estou atribuindo os arrays 
        const [alunos, medias] = listaDeAlunosEMedias;

        const indice = alunos.indexOf(aluno);

        const mediaDoAluno = medias[indice];

        console.log(`${aluno} tem a média ${mediaDoAluno}.`);

    } else {
        console.log("Aluno não encontrado!");
    }
}

exibeNomeENotaRefatorado("Ana");