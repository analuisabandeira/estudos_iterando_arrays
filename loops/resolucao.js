// ********** RESOLUÇÃO DO EXERCÍCIO ********** //



// 1. Um array com o apenas nome de todos os usuarios (só as strings)

users.sort((function (a, b) {

    if (a.name > b.name) {
        return 1;
    }

    if (a.name < b.name) {
        return -1;
    }
    return 0;
}));

const usersName = users.map((user) => user.name);
console.log(usersName);

// 2. A média de idade de todos os usuarios

const somaDasIdades = users.reduce((sum, user) => {
    
   return sum + user.age;
    
}, 0);

const mediaDasIdades = (somaDasIdades / users.length).toFixed(2);

console.log(`A média das idades dos usuários é de ${mediaDasIdades} anos`);

// 3. Um array com a empresa de todos os usuarios, separadas por props






// const usersCompany = new Set (users.map((user) => {
    
//     return {

//         company: user.company,
//         name: [user.name]
//     } 
    
// }));
// console.log(usersCompany)


const allCompanies = [ 

    {
        company: "Rocketseat",
        users: users.filter((user) => {

            if (user.company === "Rocketseat") {
        
                return user;
            }
        }).map((user) => user.name)
    },

    {
        company: "Performait",
        users: users.filter((user) => {
   
            if (user.company === "Performait") {
        
                return user;
            }
        }).map((user) => user.name)
    }
];

console.log(allCompanies);
 



// const rocketUsers = [];
// const performaUsers = [];

// const usersRocketseat= users.filter((user) => {

//     if (user.company === "Rocketseat") {

//         return user;
//     }
// });

// const usersPerformait = users.filter((user) => {
   
//     if (user.company === "Performait") {

//         return user;
//     }
// });

// const nameUserRocket =  usersRocketseat.map((user) => {

//     return {
//         company: "Rocketseat",
//         name: [user.name]
//     }
    
// });

// console.log(nameUserRocket);

// const nameUserPerforma = usersPerformait.map((user) => user.name);

// console.log(nameUserPerforma);



// const usersCompany = []




// console.log(usersCompany);




// 4. Um objeto com cada empresa e seus respectivos usuarios
