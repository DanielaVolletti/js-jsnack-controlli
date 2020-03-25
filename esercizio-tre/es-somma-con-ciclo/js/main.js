// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti con ciclo for e poi con ciclo while.

// ciclo con for

// // inserimento variabili
// var numUtente;
// var somma = 0;
//
// // creazione del ciclo for per procedere alla Somma
// for (var i = 0; i < 5; i++) {
//   numUtente = parseInt(prompt("Inserisci un numero"));
//   somma = somma + numUtente;
// }
//
// // controllo della somma con console log
// console.log(somma);
//
// // stampa della somma sulla schermata pc
// document.getElementById('somma').innerHTML = "La somma dei numeri inseriti è: " + somma;
//


// ciclo con while

// inserimento variabili
var numUtente;
var somma = 0;
var i = 0;

// creazione del ciclo while per procedere alla Somma

while (i < 5) {
  numUtente = parseInt(prompt("Inserisci un numero"));
  somma = somma + numUtente;
  i++;
}

// controllo della somma con console log
console.log(somma);

// stampa della somma sulla schermata pc
document.getElementById('somma').innerHTML = "La somma dei numeri inseriti è: " + somma;
