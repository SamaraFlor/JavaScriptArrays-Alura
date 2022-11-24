Notação json

{
  "nome": "Joao",
  "email": "joao@firma.com",
  "telefone": ["11223344", "11922334453"],
  "endereco": {
    "rua": "R. Joseph Climber",
    "numero": 1337,
    "apartamento": true,
    "complemento": "ap 934"
  }
}

Analisando detalhadamente o formato JSON, percebemos algumas particularidades que desconhecemos:

- Não existem variáveis
Nessa nova notação, não precisamos dar o nome para onde vamos guardar esse objeto.

- Chaves das propriedades têm aspas duplas (" ")
As chaves são escritas de modo parecido com o da string, mas são estritamente aspas duplas, como "nome".

- Arrays e objetos aninhados podem existir
Como em "telefone" e "endereco".

- Restrição de trailing comma
Nesse formato, é proibido ter vírgula no último item de um bloco, como em "complemento": "ap 934", diferente do JavaScript comum. Precisamos sempre nos atentar a essa limitação e não deixar vírgulas sobrando.

Além dessas diferenças que percebemos no trecho de exemplo, temos algumas outras:

- Funções não são permitidas, precisamos omiti-las do nosso objeto;
- Comentários não são permitidos;
- Suporta apenas tipos primitivos (string, number, boolean, null);
- O undefined também não é permitido;
- Algumas estruturas mais complexas, como datas ou a escrita em Regex, também podem não ser aceitas.

Por que o formato JSON existe?
Esse formato é muito utilizado quando temos um conjunto de configurações ou um padrão que queremos inserir no nosso código, acessando-o em outros lugares.

Além disso, essa notação permite transformar um objeto em uma string e transmitir esses dados de um sistema para outro, no formato em que todas as strings são transmitidas.

Para criar conexão entre cliente.json e leitura .js
Para isso, usamos o require(). Basicamente, essa é uma função que o Node.js nos permite usar para, dentre outras finalidades, utilizar o código de outro lugar, assim como acabamos de fazer.


Neste curso utilizamos uma função, chamada require(), que é bem presente no Node.js . Esta função nos permitiu passar o caminho de um arquivo terminado em .json para obter o conteúdo de um arquivo do tipo JSON. Em cursos posteriores, iremos ver que essa função também pode ser utilizada para reaproveitar códigos que estão em outros arquivos, também chamados de módulos.

Arquivos para leitura 

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Modules
https://nodejs.org/api/modules.html#modules_modules
https://cursos.alura.com.br/course/javascript-objetos/task/115765
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects
https://www.alura.com.br/artigos/es6-desestruturando-objetos
https://www.alura.com.br/artigos/entenda-diferenca-entre-var-let-e-const-no-javascript
https://www.alura.com.br/artigos/implementar-funcao-clonagem-profunda-imutabilidade-js
