// @@@@@@@@@@@@ Padrão arrow function @@@@@@@@@@@@
// Retorno dentro de escopo
// const idades = users.map((user) => {
//     return user.age
// });

// Retorno direto
// const idades = users.map((user) => users.age);
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// 1. Um array com o apenas nome de todos os usuarios (só as strings)

// 2. A média de idade de todos os usuarios

// 3. Um array com a empresa de todos os usuarios, separadas por props
// Ex.
// [
//     {
//         company: 'Rocketseat',
//         users: [{}]
//     }
// ]

// 4. Um objeto com cada empresa e seus respectivos usuarios
// Ex.
// {
//     rocketseat: [
//         'neguinho1', 'neguinho2'
//     ]
// }

// 5. Um array com todas as tecnologias de todos os usuarios, filtrada por usuarios
// Ex.
// [
//     {
//         tech: 'Angular',
//         users: ['Diego', 'Gabriel', 'Lucas']
//     }
// ]

// 6. Um filtro só com quem é front end

// 7. Um filtro só com quem é supervisor

// 8. Um filtro só com quem é estagiário do Ronaldo

// 9. Um filtro só com quem é techlead, e seus estagiários

// 10. Um filtro só com quem é front end e trabalha com angular

// 11. Um filtro só com produtos que tem estoque

// 12. Um filtro só com produtos que tem seguro

// 13. Um filtro só com produtos que serão enviados para os devs

// 14. Um filtro só com produtos que serão enviados para os estagiários

// 15. Um filtro só com produtos que serão enviados para todos

// 16 Um array igual ao de usuarios, mas adicionando os produtos que vão receber com estoque

// 17. Um array de produtos, mas com o nome de todos que vão receber

// 18. Um array só quem mora em campinas

// 19. Um array só com os estagiários de salvador

// 20. Um array que monte as empresas, dentro de cada empresa seus usuarios, e cada usuario com o produto que vai receber
// Ex.
// [
//     {
//         company: 'Rocketseat',
//         users: [
//             {
//                 name: 'Diego',
//                 produtosAReceber: [
//                     'Caneta'
//                 ]
//             }
//         ]
//     }
// ]