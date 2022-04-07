// 8. Um filtro só com quem é estagiário do Ronaldo

const ronaldoIntern = {
    
    ronaldoIntern: users.filter (user => user.supervisor === "Ronaldo").map(user => user.name)
};

console.log(ronaldoIntern);