
let comedy = [
    {
        title: 'The Haiting Game',
        director: 'Peter Hutchings',
        year: 2021
    },
    {
        title: 'Free Guy - Assumindo o Controle',
        director: 'Shawn Levy',
        year: 2021
    },
    {
        title: 'Sing 2',
        director: 'Garth Jennings',
        year: 2022
    }
];

let action = [
    {
        title: 'Uncharted',
        director: 'Ruben Fleischer',
        year: 2022
    },
    {
        title: 'Spider Man',
        director: 'Jon Watts',
        year: 2021
    },
    {
        title: 'Sonic 2: The movie',
        director: 'Jeff Fowler',
        year: 2022
    }
];

let fantasty = [
    {
        title: 'Morbius',
        director: 'Daniel Espinosa',
        year: 2022
    },
    {
        title: 'Spide Man: No way to Home',
        director: 'Jon Watts',
        year: 2021
    },
    {
        title: 'Venom',
        director: 'Andy Serkis',
        year: 2021
    }
];

if(action.length >= 3) {
    console.log('My favorite movie is ', action[1].title);
}else {
    console.log('Not even 5 stars');
}