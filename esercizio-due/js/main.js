// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

// inserimento prima parola utente
var parolaUno = prompt("Inserisci una parola:");

// inserimento seconda parola utente
var parolaDue = prompt("Inserisci un'altra parola:");

// var lunghezza parola
var parolaCorta;

// stampa prima parola più lunga, poi più corta
if (parolaUno.length < parolaDue.length) {
  parolaCorta = parolaUno + " , " + parolaDue;
} else if (parolaDue.length < parolaUno.length){
  parolaCorta = parolaDue + " , " + parolaUno;
}

console.log(parolaCorta);

// output stampa
document.getElementById('stampa-in-sequenza').innerHTML = "Le parole inserite sono, in ordine di lunghezza: " + parolaCorta;
