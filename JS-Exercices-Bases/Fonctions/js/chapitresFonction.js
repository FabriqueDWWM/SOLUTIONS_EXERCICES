// const maDiv = document.createElement("div");
// const monTitre = document.createElement("h1");
// const monParagraphe = document.createElement("p");
// monTitre.innerText = "Bienvenue !";
// monParagraphe.innerText = "Bienvenue sur mon site ! Plein de lorem ipsum...";
// maDiv.appendChild(monTitre);
// maDiv.appendChild(monParagraphe);
// document.body.appendChild(maDiv);

// const maDiv1 = document.createElement("div");
// const monTitre1 = document.createElement("h1");
// const monParagraphe1 = document.createElement("p");
// monTitre1.innerText = "Chapitre 1 : un chapitre pour débuter";
// monParagraphe1.innerText = "Paragraphe chapitre 1";
// maDiv1.appendChild(monTitre1);
// maDiv1.appendChild(monParagraphe1);
// document.body.appendChild(maDiv1);

// const maDiv3 = document.createElement("div");
// const monTitre3 = document.createElement("h1");
// const monParagraphe3 = document.createElement("p");
// monTitre3.innerText = "Chapitre 2 : un autre chapitre";
// monParagraphe3.innerText = "Paragraphe chapitre 2";
// maDiv3.appendChild(monTitre3);
// maDiv3.appendChild(monParagraphe3);
// document.body.appendChild(maDiv3);

// const maDiv4 = document.createElement("div");
// const monTitre4 = document.createElement("h1");
// const monParagraphe4 = document.createElement("p");
// monTitre4.innerText = "Chapitre 3 : encore un chapitre";
// monParagraphe4.innerText = "Paragraphe chapitre 3";
// maDiv4.appendChild(monTitre4);
// maDiv4.appendChild(monParagraphe4);
// document.body.appendChild(maDiv4);

function buildChapitre(titre, texte) {
    const divChapitre = document.createElement("div");
    const titreChapitre = document.createElement("h1");
    const parChapitre = document.createElement("p");
    titreChapitre.textContent = titre;
    parChapitre.textContent = texte;
    divChapitre.appendChild(titreChapitre);
    divChapitre.appendChild(parChapitre);
    return divChapitre;
}
//...on crée les autres chapitres de la même manière...

// autre approche : les données sont stockées dans un tableau que l'on parcourt
const chapitres = [
    {
        titre: "Bienvenue !",
        texte: "Bienvenue sur mon site ! Plein de lorem ipsum...",
    },
    {
        titre: "Chapitre 1 : un chapitre pour débuter",
        texte: "Paragraphe chapitre 1",
    },
    {
        titre: "Chapitre 2 : un autre chapitre",
        texte: "Paragraphe chapitre 2",
    },
    {
        titre: "Chapitre 3 : encore un chapitre",
        texte: "Paragraphe chapitre 3",
    },
];

chapitres.forEach((chapitre) => {
    document.body.appendChild(buildChapitre(chapitre.titre, chapitre.texte));
});
