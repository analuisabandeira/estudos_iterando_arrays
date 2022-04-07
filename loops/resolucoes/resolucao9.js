// 9. Um filtro só com quem é techlead, e seus estagiários

// const techlead = {

//     techlead: ,
//     intern: 
// }



const techleads = users.filter(user => user.role === "techlead").map(user =>
    
    {
        return {

        techlead: user.name,
        interns: users.filter(usuario => usuario.supervisor === user.name && usuario.role === "intern").map(usuario => usuario.name) 

        }
    });

// Outra forma de fazer 

// techleads.forEach(supervisor => {

//     if(supervisor.interns.length > 0) {

//         arrayFinal.push(supervisor);

//     }
// }); 

const arrayFinal = techleads.filter(supervisor => supervisor.interns.length > 0);


console.log(arrayFinal);