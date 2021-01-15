/**
 * Déclaration des variables
 */
let nombreMystere;
let nombreUtilisateur;
let nombreEssais;
let rejouer = true;

console.log("ok");

while (rejouer === true) {
    nombreEssais = 0;
    nombreUtilisateur = 0;
    nombreMystere = Math.floor(Math.random() * 100) + 1;
    console.log(nombreMystere);
    while (nombreUtilisateur !== nombreMystere) {
        nombreUtilisateur = parseInt(prompt("Saisir votre nombre :")); // conversion de nombreUtilisateur en entier
        nombreEssais++;
        console.log("Essai n°" + nombreEssais);
        if (nombreUtilisateur < nombreMystere) {
            console.log("Trop petit");
        } else if (nombreUtilisateur > nombreMystere) {
            console.log("Trop grand");
        } else {
            console.log("Gagné en " + nombreEssais + " coups.");
        }
    }
    rejouer = confirm("Voulez-vous rejouer ?");
}
console.log("Bye");
