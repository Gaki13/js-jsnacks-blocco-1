//1. Chiedo un numero all'user
let numberUser = Number(prompt("inserisci un numero"))
console.log(numberUser)
//2. SE il numero è pari, lo stampo
if (numberUser % 2 === 0){
    console.log(numberUser)
} else if (numberUser % 2 === 1){
    console.log(++numberUser)
};
//   ALTRIMENTI stampo il numero successivo a quello inserito