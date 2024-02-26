//Tipos primitivos: boolean, number, string
let ligado: boolean = false;
let nome: string = "felipe";
let idade: number = 15;

//Tipos especiais:
//nul e undefined
let nulo: null = null;
let indefinido: undefined = undefined;

//Tipos abrangentes: any e void
let retorno: void;
let retornoView: any = "";

//OBJETOS - sem previsibilidade
let produto: object = {
    name: "Daniel",
    cidade: "São Paulo",
    idade: "15",
};

//OBJETO Tipado - com previsibilidade
type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
};

let meuProduto: ProdutoLoja = {
    nome: "Sapato",
    preco: 30.99,
    unidades: 5,
};