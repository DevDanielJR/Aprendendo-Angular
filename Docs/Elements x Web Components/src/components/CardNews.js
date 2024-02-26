//Vamos organizar o código.
//No TituloDinamico.js fizemos a estilização e inserção de elementos HTML, para fazer isso de maneira mais organizada, vamos utilizar o build e styles
class CardNews extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});

        //Sombras para pendurar os filhos build e styles
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    //Método para construir HTML
    build(){

        //Criando a <div class="card">
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        //Criando a <div class="card_left">
        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");

        //Criando o <span> e indicando seus atributos.
        const autor = document.createElement("span");
        //Texo alternativo caso não tenha autor.
        autor.textContent = "By " + (this.getAttribute("autor") || "Anônimo");

        //Criando o <a> e indicando seus atributos.
        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        //Criando o <p> e indicando seus atributos.
        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        //Simbolizando que o <span>, <a> e <p> são filhas do cardLeft
        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        //Criando a <div class="card_right">
        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right");

        //Criando <img>, dando os atributos src, title e alt e simbolizando que ela é filha do cardRight
        const newsImage = document.createElement("img");
        //Imagem alternativa caso a original não carregue ou dê problema
        newsImage.src = this.getAttribute("photo") || "assets/default-img.webp";
        newsImage.alt = "Foto da logo Angular";
        newsImage.title = "Foto da logo Angular";

        cardRight.appendChild(newsImage);

        //Simbolizando que as DIVs cardLeft e cardRight são filhas da card
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        //NÃO ESQUECER DE UTILIZAR O RETURN
        return componentRoot;
        //NÃO ESQUECER DE UTILIZAR O RETURN
    }

    //Método para estilizar
    styles() {
        const style = document.createElement("style");
        style.textContent = `

            /*Estilizando Card de notícias*/
            /*Box Shadow by: cssgenerator.org*/
            .card {
                width: 80%;
                box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
                -webkit-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
                -moz-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
            
            /*Estilizando card esquerdo*/
            .card_left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
            }
            
            /*Estilizando H1 do card_left*/
            .card_left > a {
                margin-top: 15px;
                font-size: 25px;
                text-decoration: none;
                color: black;
                font-weight: bold;
            }
            
            /*Estilizando p do card_left*/
            .card_left > p {
                font-size: 15px;
            }
            
            /*Estilizando span do card_left*/
            .card_left > span {
                font-weight: 400;
            }
            
            /*Estilizando img*/
            img {
                width: 350px;
            }
        
        `;

        //NÃO ESQUECER DE UTILIZAR O RETURN
        return style;
        //NÃO ESQUECER DE UTILIZAR O RETURN
    }

}

customElements.define("card-news", CardNews);