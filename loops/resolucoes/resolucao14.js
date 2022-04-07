// 14. Um filtro só com produtos que serão enviados para os estagiários

deliveryToMyDearIntern = { 
    
    products: produtos.filter(product => product.rolesToDelivery.some(el => el === "intern")).map(product =>  product.name)

}

console.log(deliveryToMyDearIntern);