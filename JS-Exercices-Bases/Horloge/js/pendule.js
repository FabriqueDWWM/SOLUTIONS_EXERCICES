// Les éléments du DOM
const affichageDigital = document.querySelector("#digital_time");
const aiguilleSecondes = document.querySelector("#secondes");
const aiguilleMinutes = document.querySelector("#minutes");
const aiguilleHeures = document.querySelector("#heures");

chrono();

// Lancement de l'horloge
let interval = setInterval(chrono, 1000);

// Chrono déclenché dans le setInterval
function chrono() {
    let date = new Date();
    let secondes = date.getSeconds();
    let minutes = date.getMinutes();
    let heures = date.getHours();

    aiguilleSecondes.style.transform = "rotate(" + secondes * 6 + "deg)";
    aiguilleMinutes.style.transform = "rotate(" + minutes * 6 + "deg)";
    aiguilleHeures.style.transform = "rotate(" + (heures % 12) * 30 + "deg)";

    affichageDigital.innerHTML = digitalTime(heures, minutes, secondes);
}

function digitalTime(heures, minutes, secondes) {
    let affichageHeures = twoDigitsDisplay(heures);
    let affichageMinutes = twoDigitsDisplay(minutes);
    let affichageSecondes = twoDigitsDisplay(secondes);
    return `${affichageHeures} : ${affichageMinutes} : ${affichageSecondes}`;
}

function twoDigitsDisplay(nb) {
    return nb < 10 ? "0" + nb : nb; // condition ternaire
}
