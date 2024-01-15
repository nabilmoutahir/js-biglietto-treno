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


if (!isNaN(userDistance) && !isNaN(userAge)) {
    if(userAge < 18) {
        // calcolo e applico sconto 20%
        let discountPriceUnder = (ticketPrice - (ticketPrice * 0.2))
        console.log ("Se minorenne il prezzo è di " + discountPriceUnder.toFixed(2) + " Euro")
    
        // stampo biglietto
        document.getElementById ("ticket_result").innerText = (discountPriceUnder.toFixed(2) + " Euro")
        console.log ("Il prezzo è di " + discountPriceUnder.toFixed(2) + " Euro")
    
        // se over 65
    } else if(userAge > 65) {
        // calcolo e applico sconto 40%
        let discountPriceOver = (ticketPrice - (ticketPrice * 0.4))
        console.log ("Se over 65 il prezzo è di " + discountPriceOver.toFixed(2) + " Euro")
    
        // stampo biglietto
        document.getElementById ("ticket_result").innerText = (discountPriceOver.toFixed(2) + " Euro")
        console.log ("Il prezzo è di " + discountPriceOver.toFixed(2) + " Euro")
    }
} else {
    document.getElementById ("ticket_result").innerText = ("Dati non validi")
}
// se minorenne

