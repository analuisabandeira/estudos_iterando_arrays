// 18. Um array só quem mora em campinas

const livesInCampinas = {

    citizenOfCampinas : users.filter(user => user.address.city === "campinas").map(user => user.name)
}

console.log(livesInCampinas);