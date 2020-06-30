// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var numeroUtente = parseInt(prompt("inserisci un numero da 1 a 5:"));
var scelta = prompt("pari o dispari ?");
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
var numeroPc ;

numeroPc = getRndInteger(1, 5);
//
// do {
//   var scelta = prompt("pari o dispari ?");
// } while (scelta != "pari" && scelta != "dispari");

// Sommiamo i due numeri
var somma  = numeroPc + numeroUtente;

console.log(isPari(somma));
// Dichiariamo chi ha vinto.
if (isPari(somma)==true ) {
  var temp = "pari";
} else {
  var temp = "dispari";
}

if (temp == scelta) {
  console.log("hai vinto!");
} else {
  console.log("hai perso");
}

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function isPari(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(numeroUtente, scelta , numeroPc);
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
