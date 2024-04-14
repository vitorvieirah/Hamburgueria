let carrinho = [];
let valorTotalCarrinho = 0;
let listaPedidos = [];
let cont = 1;
let i = 0;

function addCarrinho (nomeItem, valorItem, imagem){

    /*carrinho = [];
    valorTotalCarrinho = 0;*/

    let valor = parseFloat(valorItem.replace(/R\$/g, '').replace(/,/g, '.'));

    carrinho.push(
        {'nomeItem' : nomeItem, 'valor' : valor, 'quantidade' : 1, 'totalItem' : valor, 'imagem' : imagem}
    );

    calculaValorCarrinho(carrinho);

    console.log(carrinho);
    console.log(valorTotalCarrinho);

    //atualizarTabela();
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
}


function atualizarTabela(){

    let tabelaCarrinho = document.getElementById('tabela-carrinho');
    tabelaCarrinho.innerHTML = '';

    carrinho.forEach((item, indice) => {
        let itemCarrinho = document.getElementById('item-carrinho');
        
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
                <button class="btn-icone botao-qtd" type="button" onclick="diminuirQuantidade(${indice})"><i class="material-icons-outlined">remove</i></button>
                <span>2</span>
                <button class="btn-icone" type="buttton" onclick="aumentarQuantidade(${indice})"><i class="material-icons-outlined">add</i></button>
            </div>
        </td>
        <td>${item.valorTotal}</td>
        <td>
            <button class="btn-icone" type="button" onclick="excluirItem(${indice})"><img class="del-tam" src="./Imgs/delete.png" alt=""></button>
        </td>
        `;
    });
}

function aumentarQuantidade(indice){
    let item = carrinho[indice];
    item.quantidade ++;
    item.valorTotal = item.quantidade * item.valor;
    calculaValorCarrinho(carrinho);
}

function diminuirQuantidade(indice){
    let item = carrinho[indice];
    item.quantidade --;
    item.valorTotal = item.quantidade * item.valor;
    calculaValorCarrinho(carrinho);
}

function excluirItem(indice){
    if(confirm(`Deseja realmente excluir o item ${carrinho[indice].item}`)){
        carrinho.splice(indice, 1);
        atualizarTabela();
    }
    calculaValorCarrinho(carrinho);
}




