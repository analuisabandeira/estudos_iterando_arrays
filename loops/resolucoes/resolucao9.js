// 9. Um filtro só com quem é techlead, e seus estagiários

// const techlead = {

//     techlead: ,
//     intern: 
// }

const techlead = users.filter(user => user.role === "techlead").map(user =>
    
    {
        return {

        techlead: user.name,
        intern: users.forEach((usuario) => {

            if(usuario.role === "intern") {

                if(usuario.supervisor === user.name) {

                    return usuario.name;
                } else {

                    return "There's no intern";
                }                
            }
        })
        }
    });

console.log(techlead);