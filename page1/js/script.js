let carrinho = localStorage.getItem('carrinhoPageCarrinhoT');
let valorTotalCarrinho = 0;
let listaPedidos = [];
let cont = 1;
let i = 0;

if(carrinho === null){
    carrinho = [];
}

function addCarrinho (nomeItem, valorItem, imagem){
    let valor = parseFloat(valorItem.replace(/R\$/g, '').replace(/,/g, '.'));

    carrinho.push(
        {'nomeItem' : nomeItem, 'valor' : valor, 'quantidade' : 1, 'totalItem' : valor, 'imagem' : imagem}
    );

    localStorage.setItem('carrinhoHomePage', JSON.stringify(carrinho));

    console.log(carrinho);
    console.log(valorTotalCarrinho);
}

function finalizarCarrinho(){
    listaPedidos.push(
        {'valorTotal' : valorTotalCarrinho, 'numero' : cont}
    );

    cont ++;
}

function calculaValorCarrinho(carrinho){
    valorTotalCarrinho = valorTotalCarrinho + carrinho[i].totalItem;
    i ++;
    localStorage.setItem('valorTotal', JSON.stringify(valorTotalCarrinho));
}