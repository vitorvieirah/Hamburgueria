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
    /*let itemCarrinho = document.getElementById('item-carrinho');
    itemCarrinho.innerHTML = '';*/

    carrinho.forEach((i, indice) => {
        let itemCarrinho = document.getElementById('item-carrinho');
        
        itemCarrinho.innerHTML = `
        
        
        `
    });
}

/*function atualizaTabela() {

    let tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';


    listaDeCompras.forEach((i, indice) => {
        let tr = document.createElement('tr');


        tr.innerHTML =
            `<td>${i.item}</td>
        <td>${i.valor}</td>
        <td>
            <button type="button" onclick="editarItem(${indice})" class="material-symbols-outlined btn-icone">edit
            </button>
        
            <button type="button" onclick="excluirItem(${indice})" class="material-symbols-outlined btn-icone">remove
            </button>
        
        </td>`;
        tableBody.append(tr);

        listaDeCompras.forEach((b, indiceB) => {
            if (indice === indiceB) {
                i = indiceB;
            }
        })
    });
}*/

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

