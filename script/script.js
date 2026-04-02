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
        document.body.style.background = 'white';
    }
    else {
        lampadina.src = "img/white_lamp.png";
        lampadina.alt="lampadina spenta";
        bottone.textContent = 'Accendi';
        document.body.style.background = 'black';
    }
}

// Collegamento bottone-funzione
bottone.addEventListener('click', clickOnOff);