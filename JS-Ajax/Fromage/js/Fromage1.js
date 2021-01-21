class Fromage {
    constructor(nom, type, pays, classement){
        this.nom = nom;
        this.type = type;
        this.pays = pays;
        this.classement = classement;
    }
    getHtml = () => {
        // Titre (noms des fromages)
        const from = document.createElement("article");
        const titre = document.createElement("h3");
        titre.appendChild(document.createTextNode(this.nom));
        from.appendChild(titre);
        // Affichage des étoiles
        for(let i = 0; i < this.classement; i++){
            const etoile = document.createElement("img");
            etoile.src="images/etoile.png";
            etoile.width=16;
            etoile.height=16;
            from.appendChild(etoile);
        }
        // Ecrire le type et le pays
        const p = document.createElement("p");
        p.appendChild(document.createTextNode(`Type : ${this.type} / Pays : ${this.pays}`));
        from.appendChild(p);
        return from;
    };
}

export default Fromage;