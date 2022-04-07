// 10. Um filtro só com quem é front end e trabalha com angular

const frontendDeveloper = []


users.forEach(user => {
    
    if(user.techs.some (tech => tech.stack === "frontend" && tech.name === "angular")) {

        const stackFront = {

            user: user.name,
            stack: "frontend",
            tech: "angular"
        }

        frontendDeveloper.push(stackFront); 

    }
}); 

console.log(frontendDeveloper);