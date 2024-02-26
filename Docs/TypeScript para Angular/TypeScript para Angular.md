# O QUE É TYPESCRIPT?

TS é como se fosse uma extensão do JS, ou seja, um JS melhor.

# DICAS

Para saber mais sobre o TSConfig, podemos entrar no site oficial do TS, ir em "tools" e depois "playground", nele iremos encontrar possíveis configurações do arquivo json que irá te auxiliar no desenvolvimento do código.

Para deixar mais prático podemos ir no primeiro package.json gerado e adicionar uma nova string nos scripts. Desse jeito: "start":"npx tsc && node build/index.js", desse modo iremos utilizar outro código para executar nosso arquivo js. Será esse comando: "npm run start"

# PARA O QUE ELE É UTILIZADO?

TS é utilizado para fazer tipagem de coisas no JS como classes ou variáveis.
Além disso, ele tem como vantagem a amostragem do erro em tempo real da codificação.

# COMO COMEÇAR?

Em um projeto novo aplique o comando "npm init -y" no terminal para iniciar um documento node.
Depois dê o comando "npm install typescript -D" para instalar o TS mas usá-lo somente para desenvolver o código, na hora de publicar ele se tornará JS (linguagem dos navegadores).

# COMO EXECUTAR NO TERMINAL?

Primeiramente precisamos usar o comando no terminal "npx tsc 'onde o arquivo está'" assim ele irá criar um arquivo .js para que ele possa ser interpretado pelo node.js. Como se fosse um tradutor de TS para JS.
Para facilitar e não ter que ficar toda hora compilando arquivos TS para JS podemos criar um TSConfig através do comando "npx tsc --init", esse arquivo tsconfig.json diz como o TS irá se comportar, como configuração inicial devemos modificar no arquivo json o "rootDir", nela iremos colocar qual será a nossa pasta contendo os arquivos TS.
Além dela, precisamos indicar também a "outDir", nela devemos indicar qual a pasta que será criado os arquivos .js.
Para fazer isso basta tirar esses comando como comentários.

# TIPAGEM DE VARIÁVEIS

Continuação em tipoVariaveis.ts