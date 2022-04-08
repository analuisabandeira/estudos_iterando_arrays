// 19. Um array só com os estagiários de salvador

const internsFromSalvador = {

        interns: users.filter(user => user.role === "intern" && user.address.city === "salvador").map(user => user.name)
}

console.log(internsFromSalvador);
