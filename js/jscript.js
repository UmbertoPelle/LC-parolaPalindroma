// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

var parola = prompt("dammi un parola:");
var palindroma = "";
// tramite il contatore scansioniamo la parola lettera per lettera

// for (var i = parola.length - 1; i >=0 ; i--) {
//   palindroma += parola[i];
// }
// console.log(palindroma);

if (isPalindroma(parola)) {
  console.log("è palindroma");
} else {
  console.log("non è palindroma");
}



function parolaInvertita(parola) {
  var invertita = "";
  for (var i = parola.length - 1; i >=0 ; i--) {
    invertita += parola[i];
  }
  return invertita;
}

function isPalindroma(parola) {
  var invertita = parolaInvertita(parola);


  if (invertita == parola) {
    return true;
  } else {
    return false;
  }

}
// for (var i = 0; i < parola.length ; i++) {
//   palindroma = parola[i] + palindroma;
// }
//
// console.log(palindroma);
