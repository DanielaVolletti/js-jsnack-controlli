// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

// inserimento primo numero
var numUno = parseInt(prompt("Inserisci un numero"));

// inserimento secondo numero
var numDue = parseInt(prompt("Inserisci un numero"));

// inserimento terzo numero
var numTre = parseInt(prompt("Inserisci un numero"));

// inserimento quarto numero
var numQuattro = parseInt(prompt("Inserisci un numero"));

// inserimento quinto numero
var numCinque = parseInt(prompt("Inserisci un numero"));

console.log(numUno , numDue, numTre, numQuattro, numCinque);

// somma 5 numeri
var sum = parseInt(numUno + numDue + numTre + numQuattro + numCinque);

console.log("La somma è: " + sum);

// output utente

document.getElementById('somma').innerHTML = "La somma dei numeri inseriti è: " + sum;
