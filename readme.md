# TRACCIA
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

## SVOLGIMENTO
- chiedo quanti km vuole percorrere l'utente
- chiedo l'età dell'utente
- calcolo il prezzo del biglietto in base ai km (0.21 euro al km)
- stampo biglietto
- se minorenne
    - calcolo sconto del 20% 
    - applico sconto
    - stampo biglietto
- se over 65 
    - calcolo sconto del 40% 
    - applico sconto
    - stampo biglietto