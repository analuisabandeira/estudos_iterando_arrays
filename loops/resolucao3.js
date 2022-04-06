// 3. Um array com a empresa de todos os usuarios, separadas por props

// Metodo 1
// const allCompanies = [ 

//     {
//         company: "Rocketseat",
//         users: users.filter((user) => {

//             if (user.company === "Rocketseat") {
        
//                 return user;
//             }
//         }).map((user) => user.name)
//     },

//     {
//         company: "Performait",
//         users: users.filter((user) => {
   
//             if (user.company === "Performait") {
        
//                 return user;
//             }
//         }).map((user) => user.name)
//     }
// ];

// console.log(allCompanies);

// Metodo 2
const allCompanies = [];

users.forEach(user => {
    // Expressão apenas valida se dentro do allCompanies tem alguma empresa com o nome repetido
    if (!allCompanies.some(el => el.company === user.company)) {

        const empresa = {
            company: user.company,
            users: users.filter(usuario => usuario.company === user.company).map(usuario => usuario.name)
        }

        allCompanies.push(empresa)
    }
})

console.log(allCompanies)