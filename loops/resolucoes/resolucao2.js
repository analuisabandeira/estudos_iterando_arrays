// 2. A média de idade de todos os usuarios

const somaDasIdades = users.reduce((sum, user) => {
    
    return sum + user.age;
     
 }, 0);
 
 const mediaDasIdades = +(somaDasIdades / users.length).toFixed(2);
 
 console.log(`A média das idades dos usuários é de ${mediaDasIdades} anos`);