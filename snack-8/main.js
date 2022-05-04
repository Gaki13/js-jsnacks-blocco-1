//1. Crea un'array di numeri interi
const list = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(list);

//2. Creo una variabile che avrà il valore della mia somma
let somma = 0;

//3. Sommo tutti gli elementi in posizione dispari
    //utilizzo un ciclo per scremare i numeri in posizione dispari
    for ( let i = 0; i < list.length; i++){
        if( i % 2 === 1){
            somma += list[i];
            console.log(somma);
        };
    };

    