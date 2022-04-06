// 6. Um filtro só com quem é front end

const allFrontendDevelopers = [];


users.forEach(user => {

   if (user.techs.every(tech => tech.stack === "frontend")) {

        const stackFront = {

            user: user.name,
            stack: "Frontend"
        }
        allFrontendDevelopers.push(stackFront);    
    }   
})

console.log(allFrontendDevelopers);

    // techs.every(tech => {

    //     if(tech.stack === "frontend") {

    //         return {

    //             user: user.name,
    //             stack: tech.stack
    //         }
    //     }  
    //     console.log(tech);
    // })
// })
