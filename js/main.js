// chiedo quanti km vuole percorrere l'utente
const userDistance = parseInt (prompt("Quanti km vuoi percorrere?"));
console.log ('Distanza utente ' + userDistance + ' km');

// chiedo l'età dell'utente
const userAge = parseInt (prompt("Quanti anni hai?"));
console.log ('Età utente ' + userAge + ' anni');

// calcolo il prezzo del biglietto in base ai km (0.21 euro al km)
let ticketPrice = (userDistance * 0.21);
console.log (ticketPrice + " Euro");

// stampo biglietto
document.getElementById ("ticket_result").innerText = (ticketPrice + " Euro")
console.log ("Il prezzo è di " + ticketPrice + " Euro")


