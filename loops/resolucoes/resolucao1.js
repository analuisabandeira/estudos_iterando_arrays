// 1. Um array com o apenas nome de todos os usuarios (só as strings)

users.sort((function (a, b) {

    if (a.name > b.name) {
        return 1;
    }

    if (a.name < b.name) {
        return -1;
    }
    return 0;
}));

const usersName = users.map((user) => user.name);
console.log(usersName);

// Prefeito