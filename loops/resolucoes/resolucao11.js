// 11. Um filtro só com produtos que tem estoque

const productsWithStock = {
    
    products: produtos.filter(product => product.quantity > 0).map(product => product.name)
}

console.log(productsWithStock);

// Certin