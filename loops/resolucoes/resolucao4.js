// 4. Um objeto com cada empresa e seus respectivos usuarios

// const eachCompany = users.forEach(user => {

//     [

//     {
//         Rocketseat: [users.filter(usuario => usuario.company === user.company).map(usuario => usuario.name)]
//     },

//     {
//         Performait: [users.filter(usuario => usuario.company === user.company).map(usuario => usuario.name)]
//     }

// ]});

// const eachCompany = [];

// users.forEach(user => {

//     if (!eachCompany.some(el => (el)[0] === user.company)) {

//         const el = [

//             {
//                 Rocketseat: users
//                 .filter(usuario => usuario === user.company)
//                 .map(usuario => usuario.name), 

//                 Performait: users
//                 .filter(usuario => usuario.Performait === user.company)
//                 .map(usuario => usuario.name)

//             }
//         ]     

//         eachCompany.push(el);
//     }
// });

// console.log(eachCompany);

const todasAsEmpresas = [];

users.forEach(user => {
    
    if (!todasAsEmpresas.some(el => el === user.company)) {

        todasAsEmpresas.push(user.company)
    }
})

console.log(todasAsEmpresas)

const objetoVazio = {

}

todasAsEmpresas.forEach(empresa => {

    const nomeEmpresa = empresa.split(" ").map( (nome, index) => {

        if (index === 0) {

            nome = nome.charAt(0).toLowerCase() + nome.slice(1);
        } else {
            
            nome = nome.charAt(0).toUpperCase() + nome.slice(1);
        }

        return nome;
    
    }).join("");

    // const nomeEmpresa = empresa.replace(" ", "_").toLowerCase();
    // *Acho chique!!! 
    

    objetoVazio[nomeEmpresa] = users.filter(usuario => empresa === usuario.company).map(usuario => usuario.name);   
});

console.log(objetoVazio);