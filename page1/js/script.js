let carrinho = [];
let valorTotalCarrinho;
let listaPedidos = [];
let cont = 1;

function addCarrinho (){
    let nomeItem = document.getElementById('nomeItem').value;
    let valor = document.getElementById('valorItem').value;

    valor = valor.replace(new RegExp("R$", 'g'), '');

    carrinho.push(
        {'nomeItem' : nomeItem, 'valor' : valor, 'quantidade' : 1}
    );

    calculaValorCarrinho(carrinho);
}

function finalizarCarrinho(){
    listaPedidos.push(
        {'valorTotal' : valorTotalCarrinho, 'numero' : cont}
    );

    cont ++;
}

function calculaValorCarrinho(carrinho){
    carrinho.foreach(i => {
        valorTotalCarrinho = valorTotalCarrinho + (carrinho[i].valor * carrinho[i].quantidade);
    });
}

function atualizarTabela(){

    carrinho.forEach((i, indice) => {
        let itemCarrinho = document.getElementById('item-carrinho');
        
        itemCarrinho.innerHTML = `
        
        
        `
    });
}

function aumentarQuantidade(indice){
    let item = carrinho[i];
    item.quantidade ++;
    calculaValorCarrinho(carrinho);
}

function diminuirQuantidade(indice){
    let item = carrinho[i];
    item.quantidade --;
    calculaValorCarrinho(carrinho);
}

function excluirItem(indice){
    if(confirm(`Deseja realmente excluir o item ${carrinho[indice].item}`)){
        carrinho.splice(indice, 1);
        atualizarTabela();
    }
    calculaValorCarrinho(carrinho);
}

