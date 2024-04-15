window.onload = function() {
    atualizarTabela();
};

function atualizarTabela(){
    let pedidos = JSON.parse(localStorage.getItem('pedidos'));
    let tabelaPedido= document.getElementById('table-body');
    tabelaPedido.innerHTML = '';
    
    pedidos.forEach((item, indice) => {
        let itemPedido = document.createElement('tr');

        itemPedido.innerHTML = `
        <td>${item.numero}</td>
        <td>${item.data}</td>
        <td>R$${item.total}</td>
        `;

        tabelaPedido.append(itemPedido);
    });
}

function limparPedidos(){
    if (confirm(`Deseja realmente limpar a lista de pedidos ?`)){
        localStorage.removeItem('pedidos');
        atualizarTabela();
    }
}