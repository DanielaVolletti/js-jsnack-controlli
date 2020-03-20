// EX: L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

// inserimento primo numero da parte dell'utente
var numUno = parseInt(prompt("Inserisci un numero"));

// inserimento primo numero da parte dell'utente
var numDue = parseInt(prompt("Inserisci un altro numero"));

// var numero numeroMaggiore
var msg;

// trovare numero maggiore
if (numUno > numDue) {
  msg = "Questo è il numero maggiore tra i due scelti: " + numUno;
} else if (numDue > numUno){
  msg = "Questo è il numero maggiore tra i due scelti: " + numDue;
} else {
  msg = "I due numeri scelti sono uguali";
}

console.log(msg);

document.getElementById('numero-grande').innerHTML = msg;
