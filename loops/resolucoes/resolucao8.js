// 8. Um filtro só com quem é estagiário do Ronaldo

const ronaldoInterns = {
    
    ronaldoInterns: users.filter (user => user.supervisor === "Ronaldo").map(user => user.name)
};

console.log(ronaldoInterns);

// Sempre que a variável se remeter a um array, fazer ela no plural.