// 7. Um filtro só com quem é supervisor

const allSupervisors = [{
    
    supervisors: new Set(users.filter(user => user.supervisor).map(user => user.supervisor))
}]

console.log(allSupervisors);

// const allSupervisors = [];

// const usersSupervisors = users.filter(user => user.supervisor).map(user => user.supervisor);

// console.log(usersSupervisors);

// usersSupervisors.forEach(supervisor => {

//     if(!allSupervisors.some(el => el === usersSupervisors)) {

//         const supervisors = {

//             supervisors: supervisor
//         }
//         allSupervisors.push(supervisors);
//     }
// })

// console.log(allSupervisors);

//DÚVIDA: PORQUE NÃO CONSIGO ACESSAR INDIVIDUALMENTE O ELEMENTO DO ARRAY?