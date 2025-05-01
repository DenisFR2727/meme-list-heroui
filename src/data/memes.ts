import { Memes } from './type';

const getRandomLikes = () => Math.floor(Math.random() * 100);

export const memes: Memes[] = [
    {
        id: 1,
        name: 'DON’t OVERTHINK IT ',
        url: 'https://i.redd.it/cij3sqtalore1.png',
        likes: getRandomLikes(),
    },
    {
        id: 2,
        name: 'Wireless cables?',
        url: 'https://i.redd.it/6f9g1jlq8ere1.png',
        likes: getRandomLikes(),
    },
    {
        id: 3,
        name: 'Without fail...',
        url: 'https://i.redd.it/gl5sf5g3ggqe1.jpeg',
        likes: getRandomLikes(),
    },
    {
        id: 4,
        name: 'IT Worker',
        url: 'https://i.redd.it/pyvae94ml5pe1.jpeg',
        likes: getRandomLikes(),
    },
    {
        id: 5,
        name: 'Steam? Ever tried Epic?',
        url: 'https://i.redd.it/5kkuhf0oqhoe1.png',
        likes: getRandomLikes(),
    },
    {
        id: 6,
        name: 'Billie, You ARE That Generation',
        url: 'https://i.redd.it/8j9q5xmsjnne1.png',
        likes: getRandomLikes(),
    },
    {
        id: 7,
        name: 'When u use 100% of your brain.',
        url: 'https://i.redd.it/h538fstgpfne1.png',
        likes: getRandomLikes(),
    },
    {
        id: 8,
        name: 'This is the portion',
        url: 'https://i.redd.it/k290h7fvoane1.png',
        likes: getRandomLikes(),
    },
    {
        id: 9,
        name: 'Darn right i am..',
        url: 'https://i.redd.it/kh7euaovuane1.png',
        likes: getRandomLikes(),
    },
    {
        id: 10,
        name: 'POV: Youre the IT guy trying to get work done',
        url: 'https://i.redd.it/spqgjc747qme1.jpeg',
        likes: getRandomLikes(),
    },
];
