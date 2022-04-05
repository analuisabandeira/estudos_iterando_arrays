const users = [
    {
        name: 'Diego',
        age: 24,
        company: 'Rocketseat',
        techs: [
            {
                id: 1,
                name: 'javascript',
                stack: 'frontend'
            },
            {
                id: 2,
                name: 'angular',
                stack: 'frontend'
            },
            {
                id: 3,
                name: 'react',
                stack: 'frontend'
            },
        ],
        address: {
            street: 'Rua Guilherme Gembala',
            number: '260',
            district: 'Jardim América',
            state: 'sp',
            city: 'campinas',
        },
        role: 'dev',
        supervisor: 'Marcos'
    },
    {
        name: 'Giovani',
        age: 21,
        company: 'Rocketseat',
        techs: [
            {
                id: 1,
                name: 'docker',
                stack: 'devops'
            },
        ],
        address: {
            street: 'Rua Mercurio Duro',
            number: '210',
            district: 'Jardim Africa',
            state: 'sp',
            city: 'campinas',
        },
        role: 'dev',
        supervisor: 'Sartoni'
    },
    {
        name: 'Marcos',
        age: 30,
        company: 'Rocketseat',
        techs: [
            {
                id: 1,
                name: 'javascript',
                stack: 'frontend'
            },
            {
                id: 2,
                name: 'c#',
                stack: 'backend'
            },
            {
                id: 3,
                name: 'docker',
                stack: 'devops'
            },
        ],
        address: {
            street: 'Rua Banana Doce',
            number: '4',
            district: 'Jardim Gana',
            state: 'sp',
            city: 'indaiatuba',
        },
        role: 'techlead'
    },
    {
        name: 'Sartoni',
        age: 27,
        company: 'Rocketseat',
        techs: [
            {
                id: 3,
                name: 'docker',
                stack: 'devops'
            },
        ],
        address: {
            street: 'Rua Maracana',
            number: '4',
            district: 'Paqueteuba',
            state: 'ba',
            city: 'salvador',
        },
        role: 'techlead'
    },
    {
        name: 'Jose',
        age: 18,
        company: 'Performait',
        techs: [
            {
                id: 1,
                name: 'javascript',
                stack: 'frontend'
            },
        ],
        address: {
            street: 'Rua Banana Salgada',
            number: '41',
            district: 'Jardim Blablabla',
            state: 'ba',
            city: 'salvador',
        },
        role: 'intern',
        supervisor: 'Ronaldo'
    },
    {
        name: 'Rivaldo',
        age: 18,
        company: 'Performait',
        techs: [
            {
                id: 1,
                name: 'c#',
                stack: 'backend'
            },
        ],
        address: {
            street: 'Rua chinelo azedo',
            number: '20',
            district: 'Jardim Corre Corre',
            state: 'sp',
            city: 'campinas',
        },
        role: 'intern',
        supervisor: 'Ronaldo'
    },
    {
        name: 'Ronaldo',
        age: 22,
        company: 'Performait',
        techs: [
            {
                id: 1,
                name: 'c#',
                stack: 'backend'
            },
        ],
        address: {
            street: 'Rua Balacodaco',
            number: '99',
            district: 'Jardim Espaço aéreo',
            state: 'sc',
            city: 'joinville',
        },
        role: 'techlead'
    },
]

const produtos = [
    {
        name: 'Notebook',
        quantity: 4,
        rolesToDelivery: ['techlead', 'dev', 'intern'],
        assurance: true
    },
    {
        name: 'Caderno de anotações',
        quantity: 10,
        rolesToDelivery: ['intern'],
        assurance: false
    },
    {
        name: 'Monitor',
        quantity: 0,
        rolesToDelivery: ['techlead', 'dev', 'intern'],
        assurance: true
    },
    {
        name: 'Mouse',
        quantity: 10,
        rolesToDelivery: ['techlead', 'dev', 'intern'],
        assurance: false
    },
    {
        name: 'Caneta',
        quantity: 10,
        rolesToDelivery: ['intern'],
        assurance: false
    },
    {
        name: 'Headset',
        quantity: 20,
        rolesToDelivery: ['dev'],
        assurance: false
    },
]

// Sistema de gestão de usuários

// const idades = users.map(function (user) {
//     adgadfagdsgs
// })



// function mapearIdade(users) {
//     return users.age
// }

// const mapearIdade = (users) => {
//     return users.age
// }


// const idades = users.map(mapearIdade)