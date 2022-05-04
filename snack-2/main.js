//1. Chiedo all'utente 2 parole in succesione
const firstWordl = prompt("inserisci una parola")
const secondWordl = prompt("inserisci un'altra parola ancora")
//2. Definisco quale delle 2 parole è più corta
//3. Stampo prima la parola più corta e poi quella più lunga
if (firstWordl.length < secondWordl.length){
    console.log(firstWordl, secondWordl);
} else if (firstWordl.length > secondWordl.length){
    console.log(secondWordl, firstWordl)
} else {
    console.log("sono lunghe uguali")
}
