// 13. Um filtro só com produtos que serão enviados para os devs

deliveryToMyDearDev = { 
    
    products: produtos.filter(product => product.rolesToDelivery.some(el => el === "dev")).map(product =>  product.name)

}

console.log(deliveryToMyDearDev);