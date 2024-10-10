// dichiaro una funzione che generi un numero casuale tra 0 e 3
const getRandomNumber = (min, max) => {
    return Math.floor(Math.random * (max + 1 - 3) + min);
};
// dichiaro un array coi colori principali
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
// dichiaro le costanti coi valori minimo e massimo
const min = 0;
const max = 3;
// recupero gli elementi dal DOM
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// aggancio un ascoltatore di eventi al bottone
btn.addEventListener('click', () => {
    document.body.style.backgroundColor = colors[getRandomNumber];
    color.innerText = colors[getRandomNumber];
})
