function addCarrinho(nomeItem, valorItem, imagem) {
    let valor = parseFloat(valorItem.replace(/R\$/g, '').replace(/,/g, '.'));
    let carrinho = localStorage.getItem('carrinho');
    let carrinhoArray = carrinho ? JSON.parse(carrinho) : [];
    let quantidade=1;
    let aumenta;

    if(carrinhoArray){
        aumenta = validarProdutoIgual(nomeItem, carrinhoArray);
    }
    
    if(!aumenta){
        carrinhoArray.push({
            'nomeItem': nomeItem,
            'valor': valor,
            'quantidade': quantidade,
            'totalItem': valor,
            'imagem': imagem
        });
    }   
    localStorage.setItem('carrinho', JSON.stringify(carrinhoArray));
}

function validarProdutoIgual(nomeItem, carrinhoArray){
    let aumentou;
    carrinhoArray.forEach(produto => {
        if(nomeItem == produto.nomeItem){
            produto.quantidade++;
            aumentou = true;
        }
    });
    return aumentou;
}