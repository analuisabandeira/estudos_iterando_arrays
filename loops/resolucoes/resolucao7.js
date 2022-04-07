// 7. Um filtro só com quem é supervisor

const allSupervisors = [];

const usersSupervisors = users.filter(user => user.supervisor).map(user => user.supervisor);

console.log(usersSupervisors);

usersSupervisors.forEach(supervisor => {

    if(!allSupervisors.some(el => el === supervisor)) {

        allSupervisors.push(supervisor);
    }
})

console.log(allSupervisors);