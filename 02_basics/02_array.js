const marvel_heroes = ["thor", "ironman", "spiderman"];
const dc_heroes = ["superman","flashman", "batman"];
// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);
// console.log(marvel_heroes [3] [1]);

// const allHeroes = marvel_heroes.concat(dc_heroes);
// console.log(allHeroes);

// const all_new_heroes = [...marvel_heroes, ...dc_heroes];  // this is spread operator(...)
// console.log(all_new_heroes);  // spread opertor and concatenate method both do same work but spread operator is more useful

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

// const real_another_array = another_array.flat(Infinity); // Use .flat method to simplify complicated arrays i.e array within an array 
// console.log(real_another_array);

console.log(Array.isArray("hitesh"));
console.log(Array.from("hitesh"));
console.log(Array.from({name: "hitesh"})); // interesting case for interviews
