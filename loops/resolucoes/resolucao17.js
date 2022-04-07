// 17. Um array de produtos, mas com o nome de todos que vão receber

//1º) Verificar o role e se receebe o produto
//2º) Montar o objeto

const allProducts = [];

produtos.forEach(product => {
    
    if (!allProducts.some(el => el === product.name)) {

        allProducts.push(product.name)
    }
})

console.log(allProducts);

const objetoProduct = {

}

const rolesToDelivery = produtos.map(product => product.rolesToDelivery);

console.log(rolesToDelivery);

const userRole = users.forEach(user => {

    if (rolesToDelivery.forEach(role => role.some(el => el === user.role))) {

        const usuarios = users.map(user => user.name);
        return usuarios;
    }
});

console.log(userRole);


allProducts.forEach(product => objetoProduct[product] = userRole);

console.log(objetoProduct);
