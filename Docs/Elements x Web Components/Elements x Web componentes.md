## TRABALHANDO COM WEB COMPONENTS NO FRONT-END

## DICAS

O site caniuse.com é um site onde consulta para você navegadores que aceitam o que você quer usar no seu site, para usá-lo basta inserir o que você quer usar e ver quais navegadores possuem compatibilidade.


# O QUE É DOM?

DOM é a sigla para Document Object Model, que é basicamente o modelo do objeto do documento.
DOM consiste numa em como as TAGs são organizadas, no caso, em forma de árvore. As árvores tem suas raízes e por vez os galhos, depois galhos menores e por fim as folhas. 
Assim como a árvore o site HTML possui sua estrutura tendo uma raíz, galhos e folhas. Nesse caso, a raíz é a <div class="container"> a qual contém todo o site, após ela, vem a <div class="card">, ela é filha (child) da div container (pai). Ou seja, todas as TAGs que ficam dentro de uma TAG são chamadas de filhas e a TAG que englobas as demais são chamadas Pai.

# SHADOW DOM

A SHADOW DOM ou DOM FANTASMA é aquela DOM dentro de uma DOM, essa DOM FANTASMA pode ser manipulada de forma encapsulada, ou seja, alterar somente ela, depois de tudo ter sido devidamente arrumado, podemos anexar ela com a DOM principal. Iremos anexar ela através do elemento Custom Element onde a gente vai dar um nome para ele, criar uma TAG HTML para invocar o SHADOW DOM.
A SHADOW DOM é importante pois com ela podemos mexer em um HTML complexo de forma isolada, organizando a codificação.

# O QUE É UM COMPONENT?

Component é uma função JS que vai retornar mais js, HTML ou CSS.

## COMO FUNCIONA?

Em um documento HTML podemos trazer para um um bloco de fora, o nosso componente, esse bloco é como se fosse uma caixinha que irá conter seus elementos HTML.
Mas, além de conter só elementos, ele pode conter estilo exclusivo para seu componente. Assim como os estilos, a caixinha pode conter as propriedades (props, dito popularmente), por exemplo, name="Daniel".

A principal vantagem de utilizar componentes é reutilizar ele em outros códigos, além de que, toda complexidade do componente estará separado, para quando precisar dele podemos apenas chama-lo no HTML.

# CRIANDO SHADOW DOM

1- Criar pasta SRC;
2- Dentro da pasta SRC criar a pasta Components;
3- Criar um arquivo .js
Continuação no CardNewsTeste.js...

# ESTILIZANDO COMPONENT

1- Fazer igual ao CardNewsTeste.js
Continuação no TituloDinamico.js...

# CRIANDO PROP

1- Ao invés do textContent (conteúdo de texto) receber uma string, iremos dar a ela o this.getAttribute("nome do atributo")
2- Depois, no arquivo HTML, dentro do Selector criado, escreva esse atributo e o que você quer que ele receba.
Continuação no index.html...