class Fromage {
    constructor(nom, type, pays, classement){
        this.nom = nom; // crée une propriété "nom" pour la classe Fromage
        this.type = type;
        this.pays = pays;
        this.classement = classement;
    }
    getHtml = () => {
        const from = document.createElement("article");
        // construction du titre
        const titre = document.createElement("h3");
        titre.textContent = this.nom;
        from.appendChild(titre);
        // construction des étoiles
        for(let i = 1; i <= this.classement; i++){
            const etoile = document.createElement("img");
            etoile.src = "./images/etoile.png";
            etoile.width=16;
            etoile.height=16;
            from.appendChild(etoile);
        }
        // construction du paragraphe avec type et pays
        const p = document.createElement("p");
        p.textContent = "Type : " + this.type + " / Pays : " + this.pays;
        from.appendChild(p);

        return from; // la méthode retourne le code html du fromage
    };
}

export default Fromage;