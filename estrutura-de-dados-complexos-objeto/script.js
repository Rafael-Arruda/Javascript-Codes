// 1 Crie um objeto que receba ao menos três propriedades sobre você.
let sobre = {
    nome: "Rafael",
    idade: 21,
    curso: "Ciência da Computação"
}

// 2  Adicione uma nova propriedade sem alterar seu objeto inicial.
sobre.cargo = "Programador";

//3 Remova uma propriedade desse objeto.
delete sobre.idade;

// 4 Mostre no console todas as propriedades desse objeto.
console.log(sobre);

// 5 Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
// Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos
// Na propriedade amigos, adicione ao menos 4 itens

let cadastro = [
    {
        nome: "Maria",
        idade: 35,
        telefone: "(88)88907654",
        amigos: ['Carlos', 'Pedro', 'Sandra', 'Gabriel']
    },
    {
        nome: "Gustavo",
        idade: 31,
        telefone: "(90)90909090",
        amigos: ['George', 'Mariana', 'Lucas', 'Ricardo']
    },
    {
        nome: "Sandra",
        idade: 25,
        telefone: "(80)80808080",
        amigos: ['Pedro', 'Karla', 'Welligton', 'Kaio']
    },
    {
        nome: "Mariana",
        idade: 51,
        telefone: "(10)10101010",
        amigos: ['Karolina', 'Liandra', 'Hiago', 'Pedro']
    },
    {
        nome: "Vitória",
        idade: 19,
        telefone: "(20)20202020",
        amigos: ['Cristina', 'Sabrina', 'Bruna', 'Nanda']
    }
];

//6 Mostre no console o nome de um amigo de cada lista.

for(let i = 0; i < cadastro.length; i++){
    console.log(cadastro[i].amigos[cadastro[i].amigos.length-1]);
}
