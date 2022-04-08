// 10. Um filtro só com quem é front end e trabalha com angular

const frontendDevelopers = users
  .filter((user) =>
    user.techs.some(
      (tech) => tech.stack === "frontend" && tech.name === "angular"
    )
  )
  .map((user) => {
    return {
      user: user.name,
      stack: "frontend",
      tech: "angular",
    };
  });





// const frontendDevelopers = [];

// users.forEach(user => {

//     if(user.techs.some (tech => tech.stack === "frontend" && tech.name === "angular")) {

//         const stackFront = {

//             user: user.name,
//             stack: "frontend",
//             tech: "angular"
//         }

//         frontendDevelopers.push(stackFront);

//     }
// });

console.log(frontendDevelopers);
