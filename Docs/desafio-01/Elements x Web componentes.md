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