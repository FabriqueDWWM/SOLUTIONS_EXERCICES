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

export default Chapitre;
