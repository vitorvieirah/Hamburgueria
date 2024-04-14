let carrinho = [];
let valorTotalCarrinho;
let listaPedidos = [];
let cont = 1;

function addCarrinho (){
    let nomeItem = document.getElementById('nomeItem').value;
    let valor = document.getElementById('valorItem').value;
    let img = document.getElementById('imagem').value;

    valor = valor.replace(new RegExp("R$", 'g'), '');

    carrinho.push(
        {'nomeItem' : nomeItem, 'valor' : valor, 'quantidade' : 1, 'totalItem' : valor, 'imagem' : img}
    );

    calculaValorCarrinho(carrinho);

    atualizarTabela();
}

function finalizarCarrinho(){
    listaPedidos.push(
        {'valorTotal' : valorTotalCarrinho, 'numero' : cont}
    );

    cont ++;
}

function calculaValorCarrinho(carrinho){
    carrinho.foreach(i => {
        valorTotalCarrinho = valorTotalCarrinho + carrinho[i].valorTotal;
    });
}


function atualizarTabela(){

    let tabelaCarrinho = document.getElementById('tabela-carrinho');
    tabelaCarrinho.innerHTML = '';

    carrinho.forEach((i, indice) => {
        let itemCarrinho = document.getElementById('item-carrinho');
        
        itemCarrinho.innerHTML = `
        <td>
            <div class="product">
                <img class="imagem" src="${i.imagem}"/>
                <div class="info">
                    <div class="name">${i.nomeItem}</div>
                    <div class="preco">${i,valor}</div>
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
        <td>${i.valorTotal}</td>
        <td>
            <button class="btn-icone" type="button" onclick="excluirItem(${indice})"><img class="del-tam" src="./Imgs/delete.png" alt=""></button>
        </td>
        `;
    });
}

function aumentarQuantidade(indice){
    let item = carrinho[i];
    item.quantidade ++;
    item.valorTotal = item.quantidade * item.valor;
    calculaValorCarrinho(carrinho);
}

function diminuirQuantidade(indice){
    let item = carrinho[i];
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




