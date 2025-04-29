import { Memes } from './type';

const getRandomLikes = () => Math.floor(Math.random() * 100);

export const memes: Memes[] = [
    {
        id: Date.now(),
        name: 'DON’t OVERTHINK IT ',
        url: 'https://i.redd.it/cij3sqtalore1.png',
        likes: getRandomLikes(),
    },
    {
        id: Date.now(),
        name: 'Wireless cables?',
        url: 'https://i.redd.it/6f9g1jlq8ere1.png',
        likes: getRandomLikes(),
    },
    {
        id: Date.now(),
        name: 'Without fail...',
        url: 'https://i.redd.it/gl5sf5g3ggqe1.jpeg',
        likes: getRandomLikes(),
    },
    {
        id: Date.now(),
        name: 'IT Worker',
        url: 'https://i.redd.it/pyvae94ml5pe1.jpeg',
        likes: getRandomLikes(),
    },
    {
        id: Date.now(),
        name: 'Steam? Ever tried Epic?',
        url: 'https://i.redd.it/5kkuhf0oqhoe1.png',
        likes: getRandomLikes(),
    },
    {
        id: Date.now(),
        name: 'Billie, You ARE That Generation',
        url: 'https://i.redd.it/8j9q5xmsjnne1.png',
        likes: getRandomLikes(),
    },
    {
        id: Date.now(),
        name: 'When u use 100% of your brain.',
        url: 'https://i.redd.it/h538fstgpfne1.png',
        likes: getRandomLikes(),
    },
    {
        id: Date.now(),
        name: 'This is the portion',
        url: 'https://i.redd.it/k290h7fvoane1.png',
        likes: getRandomLikes(),
    },
    {
        id: Date.now(),
        name: 'Darn right i am..',
        url: 'https://i.redd.it/kh7euaovuane1.png',
        likes: getRandomLikes(),
    },
    {
        id: Date.now(),
        name: 'POV: Youre the IT guy trying to get work done',
        url: 'https://i.redd.it/spqgjc747qme1.jpeg',
        likes: getRandomLikes(),
    },
];
