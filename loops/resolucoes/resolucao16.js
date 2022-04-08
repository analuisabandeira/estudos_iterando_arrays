// 16 Um array igual ao de usuarios, mas adicionando os produtos que vão receber com estoque

const allUsers = users.map (user => {

    return {

        ...user,

        product: produtos.filter(product => product.rolesToDelivery.some(el => el === user.role)).map(product => {
            
            return {
                
                name: product.name,
                quantity: product.quantity
            } 
        })
    }});

console.log(allUsers);