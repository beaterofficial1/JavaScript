const marvel_heros = ['ironman', 'thor', 'spiderman', 'doctor strange', 'wanda']
const dc_heros = ['batman', 'superman', 'therock', 'flash']

// marvel_heros.push(dc_heros) //Array in Array
// allHeros = marvel_heros.concat(dc_heros) //return new array 
// console.log(allHeros);

//Spread...
// const allNewHeros = [...marvel_heros, ...dc_heros]
// console.log(allNewHeros);


const games = ['Garena Free Fire', 'BGMI', 'COD', 'Candy Crush', 'Clash of Clans']

console.log(Array.isArray('Beater'));
console.log(Array.from('Beater'));
console.log(Array.from({ name: 'Eziox2' })); //[]

let score1 = 100
let score2 = 300
let score3 = 400
let score4 = 600

console.log(Array.of(score1, score2, score3, score4))