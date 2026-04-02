const bottone = document.querySelector('#btn-toggle');
const lampadina = document.querySelector('#lampadina-on-off');

/* --------------------------------
FUNZIONI
-------------------------------- */
// Handler: istruzioni per switch immagine al click
function clickOnOff() {
    if(lampadina.src.includes("img/white_lamp.png")) {
        lampadina.src = "img/yellow_lamp.png";
        lampadina.alt="lampadina accesa";
        bottone.textContent = 'Spegni';
    }
    else
        lampadina.src = "img/white_lamp.png";
        lampadina.alt="lampadina spenta";
        bottone.textContent = 'Accendi';

}

// Collegamento bottone-funzione
bottone.addEventListener('click', clickOnOff);