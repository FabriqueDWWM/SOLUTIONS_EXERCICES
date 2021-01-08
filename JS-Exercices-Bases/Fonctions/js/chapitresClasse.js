class Chapitre {
    titre;
    texte;
    constructor(titre, texte) {
        this.titre = titre;
        this.texte = texte;
    }
    buildHtml() {
        const divChapitre = document.createElement("div");
        const titreChapitre = document.createElement("h1");
        const parChapitre = document.createElement("p");
        titreChapitre.textContent = this.titre;
        parChapitre.textContent = this.texte;
        divChapitre.appendChild(titreChapitre);
        divChapitre.appendChild(parChapitre);
        return divChapitre;
    }
}

// solution en créant les chapitres successivement
const bienvenue = new Chapitre(
    "Bienvenue !",
    "Bienvenue sur mon site ! Plein de lorem ipsum..."
);
const bienvenueHtml = bienvenue.buildHtml();
document.body.appendChild(bienvenueHtml);
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
    let chap = new Chapitre(chapitre.titre, chapitre.texte);
    document.body.appendChild(chap.buildHtml());
});
