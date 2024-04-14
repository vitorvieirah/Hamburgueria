let carrinho = [];
//let carrinhoSalvo = localStorage.getItem('carrinho');
let valorTotalCarrinho = 0;

if (carrinhoSalvo) {
    carrinho = JSON.parse(carrinhoSalvo);
    localStorage.setItem('carrinhoPageCarrinho', JSON.stringify(carrinho));
}

function calculaValorCarrinho(carrinho){
    valorTotalCarrinho = 0;
    carrinho.forEach(item =>{
        valorTotalCarrinho = valorTotalCarrinho + item.totalItem;
    });
}

console.log("Ta vazio");

function atualizarPage(){
    let total = "Valor total: ";
    let label = document.getElementById('total-pedido');
    label.innerHTML = '';
    label.innerHTML = valorTotalCarrinho.toString();
}

function atualizarTabela(){
    let tabelaCarrinho = document.getElementById('table-body');
    tabelaCarrinho.innerHTML = '';
    let valorItem;
    let valorTotalItem;

    carrinho.forEach((item, indice) => {
        let itemCarrinho = document.createElement('tr');
        
        itemCarrinho.innerHTML = `
        <td>
            <div class="product">
                <img class="imagem" src="${item.imagem}"/>
                <div class="info">
                    <div class="name">${item.nomeItem}</div>
                    <div class="preco">${item.valor}</div>
                </div>
            </div>
        </td>
        <td>
            <div class="qty">
                <button type="button" onclick="diminuirQuantidade(${indice})" class="quant btn-icone btn-left"><i class="material-icons-outlined">arrow_back_ios</i></button>
                <span class="quant text-bt">${item.quantidade}</span>
                <button type="button" onclick="aumentarQuantidade(${indice})" class="quant btn-icone btn-right"><i class="material-icons-outlined">arrow_forward_ios</i></button>
            </div>
        </td>
        <td>${item.totalItem}</td>
        <td>
            <button type="button" onclick="excluirItem(${indice})" class="btn-icone"><img class="del-tam" src="./Imgs/delete.png" alt=""></button>
        </td>
        `;
    
        tabelaCarrinho.append(itemCarrinho);
    });

    atualizarPage();
} 

window.onload = function() {
    carrinho = localStorage.getItem('carrinhoHomePageT');
    atualizarTabela();
};

function aumentarQuantidade(indice){
    let item = carrinho[indice];
    console.log(item);
    item.quantidade ++;
    item.totalItem = item.quantidade * item.valor;
    calculaValorCarrinho(carrinho);
    atualizarTabela();
}

function diminuirQuantidade(indice){
    let item = carrinho[indice];
    item.quantidade --;
    item.totalItem = item.quantidade * item.valor;
    calculaValorCarrinho(carrinho);
    atualizarTabela();
}

function excluirItem(indice){
    if(confirm(`Deseja realmente excluir o item ${carrinho[indice].item}`)){
        carrinho.splice(indice, 1);
        calculaValorCarrinho(carrinho);
        atualizarTabela();
        localStorage.setItem('carrinhoPageCarrinho', JSON.stringify(carrinho));
    }
}