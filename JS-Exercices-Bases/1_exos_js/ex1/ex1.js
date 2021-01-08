/* MODIFIER LA COULEUR DU TEXTE */

// Option 1 - Je récupère la liste des div dans la page HTML et j'attribue la première ([0]) à la variable maDiv
var maDiv = document.getElementsByTagName('div')[0];
console.log(maDiv); // Afficher la div sélectionnée dans la console (touche F12)
maDiv.style.color = "#FF0000"; // On modifie la propriété 'color' dans les styles de la div

// Option 2 - Utiliser querySelector. Il renverra la première div trouvée
let maDivOption2 = document.querySelector('div'); // Psst, vous avez vu ? J'ai utilisé let...
console.log(maDivOption2);
maDivOption2.style.color = "green";

// Il y a certainement d'autre façons de faire

/* MODIFIER LA POSITION DU TEXTE */
// Plein d'options s'offre à nous. Quelques exemples

// Option 1 - Modifier le style du body
document.body.style.textAlign = 'center'; // On exécute une instruction immédiate sans passer par une variable

// On peut aussi travailler directement sur la div du début
maDiv.style.marginTop = '50px'; // On récupère la variable du début qui est toujours valide

/* AJOUTER UNE BALISE */
// Voici une option assez propre
var uneDiv = document.createElement('div'); // On crée une balise div avec le code
uneDiv.textContent = "Coucou nouvelle div";
document.body.appendChild(uneDiv); // On ajoute la div avec appendChild dans la page

/* INVERSER LES DEUX TEXTES */
// J'ai choisi de vous montrer une solution un brin technique
var texte1 = maDiv.textContent; // On sauvegarde les valeurs des textes dans des variables
var texte2 = uneDiv.textContent;

maDiv.textContent = texte2;
uneDiv.textContent = texte1;

/* ALIGNER LES BALISES A GAUCHE ET A DROITE */
document.getElementsByTagName('div')[0].style.float = 'left';
document.getElementsByTagName('div')[1].style.float = 'right';