//20. Um array que monte as empresas, dentro de cada empresa seus usuarios, e cada usuario com o produto que vai receber

const allTheCompanies = []


// const companies = users.filter(user => {

//     if (!allTheCompanies.some(el => el === user.company)) {

//         allTheCompanies.push(user.company);
//     }

// });

// Correção: Usar foreach no lugar do filter, e não precisa armazenar isso
users.forEach(user => {

    if (!allTheCompanies.some(el => el === user.company)) {

        allTheCompanies.push(user.company);
    }

});

const arrayAllTheCompanies = allTheCompanies.map(company => {

    return {

        company: company,
        users: users.filter(usuario => company === usuario.company).map(usuario => {

            return {

                nome: usuario.name,
                produtosAReceber: produtos.filter(product => product.rolesToDelivery.some(el => el === usuario.role)).map(product => product.name)
            }
        })
    }
})

console.log(arrayAllTheCompanies);

// Quase acertou tudo, precisou somente um code review