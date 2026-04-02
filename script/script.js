const bottone = document.querySelector('#btn-toggle');
const lampadina = document.querySelector('#lampadina-on-off');

/* --------------------------------
FUNZIONI
-------------------------------- */
// Handler: istruzioni per switch immagine al click
function clickOnOff() {
    if(lampadina.src.includes("img/white_lamp.png")) {
        lampadina.src = "img/yellow_lamp.png";
    }
    else
        lampadina.src = "img/white_lamp.png";

}


bottone.addEventListener('click', clickOnOff);