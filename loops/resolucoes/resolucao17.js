// 17. Um array de produtos, mas com o nome de todos que vão receber

//Obeject mode

// const allProducts = [];

// produtos.forEach(product => {
    
//     if (!allProducts.some(el => el.name === product.name)) {

//         allProducts.push(product)
//     }
// })

// // console.log(allProducts);

// const objetoProducts = {

// }

// allProducts.forEach(product => {

//     const nomeProduct = product.name.split(" ").map( (nome, index) => {

//         if (index === 0) {

//             nome = nome.charAt(0).toLowerCase() + nome.slice(1);
//         } else {
            
//             nome = nome.charAt(0).toUpperCase() + nome.slice(1);
//         }

//         return nome;
    
//     }).join("");

//     objetoProducts[nomeProduct] = users.filter(usuario => product.rolesToDelivery.some(role => role === usuario.role)).map(user => user.name);   

// });

// console.log(objetoProducts);



//Array Mode

const todosOsProdutos = produtos.map(produto => {

    return {
        name: produto.name,
        usersToDelivery: users.filter(usuario => produto.rolesToDelivery.some(role => role === usuario.role)).map(user => user.name)  
    }
}) 
console.log(todosOsProdutos);
