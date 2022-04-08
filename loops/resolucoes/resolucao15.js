// 15. Um filtro com produtos que serão enviados para todos

// const allRoles = ['techlead', 'dev', 'intern'];

deliveryToAll = { 
    
    products: produtos.filter(product => product.rolesToDelivery.some(el => el === 'techlead', 'dev', 'intern')).map(product =>  product.name)
}

console.log(deliveryToAll);
