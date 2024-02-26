

//Classe para todos os Cards de notícia, dizendo que ela herda elementos do HTML, vai se comportar igual a um elemento HTMl.
class CardNewsTeste extends HTMLElement {

    //primeiro método que executa sempre é o método construtor, ou seja, em ma classe, a primeira coisa a ser executada é o construtor.
    constructor(){

        //Super invoca o método construtor de quem você está herdando, logo, estamos executando o construtor da classe e o construtor do HTMLElement.
        super();

        //Aqui começamos a nossa árvore.
        //Isso diz que essa classe (this) vai anexar/criar(attach) uma sombra(shadow).
        //O modo é se o JS poderá ser manipulado pelo mundo exterior, no caso, open autoriza a manipulação e closed não autoriza.
        const shadow = this.attachShadow({mode: "open"});

        //Dentro da sombra coloquei algo que será acrescentado no documento HTML.
        shadow.innerHTML = '<h1>Olá Pessoas</h1.'
    }
}

//chamando o customElements e definindo qual elemento customizado estamos criando (DETALHE: SEMPRE UTILIZAR HÍFEN NA SUA TAG CRAIDA PARA DIFERENCIAR DAS OUTRAS TAGs). Depois da vírgula indicamos onde está o construtor molde, no caso a classe CardNews
customElements.define('card-news', CardNewsTeste)
