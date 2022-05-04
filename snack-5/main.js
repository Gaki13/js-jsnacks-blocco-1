//1. Crea un'array vuoto
const lista = [];

//2. Chiedi all'utente di inserire un numero 6 volte
for ( let i = 1; i <= 6; i++ ){
    const number = Number(prompt("inserisci un numero"))
    //3. SE il numero inserito è dispari il numero va inserito nell'array vuoto
    if (number % 2 === 1){
        lista.push(number)
    }
};

console.log(lista);