let carrinhoHomePage = [];
let carrinhoPageCarrinho = [];
let valorTotalCarrinhoHomePage;
let valorTotalCarrinhoPageCarrinho;
let carrinho = [];
let valorTotalCarrinho = 0;

localStorage.setItem('carrinhoHomePageT', JSON.stringify(carrinhoHomePage));
localStorage.setItem('carrinhoPageCarrinhoT', JSON.stringify(carrinhoPageCarrinho));


function idaHomePage(){
    carrinhoHomePage = localStorage.getItem('carrinhoHomePage');
}

function idaCarrinho(){
    carrinhoPageCarrinho = localStorage.getItem('carrinhoPageCarrinho');
}


/*console.log("Carrinho homepage: " + carrinhoHomePage);
console.log("Carrinho pagecarrinho: " + carrinhoPageCarrinho);*/

/*localStorage.setItem('totalHomePage', JSON.stringify(valorTotalCarrinhoHomePage));
localStorage.setItem('totalPageCarrinho')*/