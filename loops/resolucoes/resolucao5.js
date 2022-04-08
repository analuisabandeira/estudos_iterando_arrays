// 5. Um array com todas as tecnologias de todos os usuarios, filtrada por usuarios


const allTechs = [];

users.forEach(user => user.techs.map(tech => {

    if (!allTechs.some(el => el === tech.name)) {

        allTechs.push(tech.name);
    }

}));

const usersTechs = allTechs.map (tech => {

    return {

        tech: tech,
        users: users.filter(user => user.techs.some(el => el.name === tech)).map(usuario => usuario.name)
    }
})

console.log(usersTechs);

// Excelente