//1. Creo 2 array da cui prendere gli elementi e creare i nomi 
const names = ["john", "Narancia", "Bruno", "Jonathan", "Josuke", "Jean", "Panda"]
const lastNames = ["Joestar", "Bucciarati", "Picasso", "Jeager", "Lopez", "Ccontainer", "Rossi"]

//2. Creo di math random dai quali scegliere i valori dei miei array
//nome random
const randomName = Math.floor(Math.random() * names.length);
//cognome random
const randomlastNames = Math.floor(Math.random() * lastNames.length);

//3. Connetto le mie 2 stringhe per creare il nome che poi stamperò in console
let fullName = (names[randomName]) + " " + (lastNames[randomlastNames]);
console.log(fullName);