// dichiaro una funzione per generare numeri casuali
const getRandomNumber = () => Math.floor(Math.random() * hex.length);
// dichiaro un array con interi e caratteri
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// recupero gli elementi dal DOM
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// aggancio un ascoltatore di eventi al bottone
btn.addEventListener('click', () => {
    // dichiaro una variabile di partenza con la stringa del codice colore
    let hexColor = '#';
    // faccio un ciclo sull'array per avere i sei caratteri necessari
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    };

})