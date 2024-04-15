window.onload = function() {
    carregarCarrinho();
};

let valorTotalCarrinho = 0;

function carregarCarrinho() {
    let carrinho = localStorage.getItem('carrinho');
    if (carrinho) {
        let carrinhoArray = JSON.parse(carrinho);
        calculaValorCarrinho(carrinhoArray);
        atualizarTabela(carrinhoArray);
    }
}

function atualizarTabela(carrinhoArray) {
    let tabelaCarrinho = document.getElementById('table-body');
    tabelaCarrinho.innerHTML = '';
    
    carrinhoArray.forEach((item, indice) => {
        let itemCarrinho = document.createElement('tr');
        let valor = item.totalItem.toString().replace(/\./g, ',');

        itemCarrinho.innerHTML = `
        <td>
            <div class="product">
                <img class="imagem" src="${item.imagem}"/>
                <div class="info">
                    <div class="name">${item.nomeItem}</div>
                    <div class="preco">R$ ${item.valor}</div>
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
        <td>R$${valor}</td>
        <td>
            <button type="button" onclick="excluirItem(${indice})" class="btn-icone"><img class="del-tam" src="./Imgs/delete.png" alt=""></button>
        </td>

        `;

        tabelaCarrinho.append(itemCarrinho);
    });
    atualizarPage();
}

function atualizarPage(){
    let label = document.getElementById('total-pedido');
    label.innerHTML = '';
    label.innerHTML = `
        Total: R$ ${valorTotalCarrinho.toString()},00
    `;
}

function calculaValorCarrinho(carrinho){
    valorTotalCarrinho = 0;
    carrinho.forEach(item =>{
        valorTotalCarrinho = valorTotalCarrinho + item.totalItem;
    });
}

function aumentarQuantidade(indice) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho'));
    carrinho[indice].quantidade++;
    carrinho[indice].totalItem = carrinho[indice].quantidade * carrinho[indice].valor;
    calculaValorCarrinho(carrinho);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarTabela(carrinho);
}
function diminuirQuantidade(indice) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho'));
    if (carrinho[indice].quantidade > 1) {
        carrinho[indice].quantidade--;
        carrinho[indice].totalItem = carrinho[indice].quantidade * carrinho[indice].valor;
        calculaValorCarrinho(carrinho);
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        atualizarTabela(carrinho);
    }
}

function excluirItem(indice) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho'));
    if (confirm(`Deseja realmente excluir o item ${carrinho[indice].nomeItem}?`)) {
        carrinho.splice(indice, 1);
        calculaValorCarrinho(carrinho);
        atualizarTabela(carrinho);
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
    }
}

function criarPedido(){
    let numero;
    let pedidos = localStorage.getItem('pedidos');
    let pedidosArray = pedidos ? JSON.parse(pedidos) : [];

    numero = gerarNumerosNaoRepetidos();

    let dataAtual = new Date();
    let data = dataAtual.getDate() + "/" + dataAtual.getMonth() + "/" + dataAtual.getFullYear();

    pedidosArray.push({
        'numero' : numero,
        'data' : data,
        'total' : valorTotalCarrinho
    });

    carrinho = [];
    carrinhoArray = [];

    localStorage.removeItem('carrinho');
    localStorage.removeItem('carrinhoArray');

    localStorage.setItem('pedidos', JSON.stringify(pedidosArray));
}

function gerarNumerosNaoRepetidos() {
    const min = 1;
    const max = 1000;
    const quantidade = 1;
    let numeros = [];
    for (let i = min; i <= max; i++) {
        numeros.push(i);
    }

    let numerosEmbaralhados = [];
    while (numeros.length) {
        const indiceAleatorio = Math.floor(Math.random() * numeros.length);
        numerosEmbaralhados.push(numeros.splice(indiceAleatorio, 1)[0]);
    }

    return numerosEmbaralhados.slice(0, quantidade);
}