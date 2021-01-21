/**
 * @class Classe qui affiche les fromages en fonction des données JSON chargées
 * @constructor
 * @param {fromages} Fromages - Un tableau contenant les fromages à afficher
 * @param { array } Fromages
 */

class Fromages{
    constructor(fromages=[]){
        this.fromages = fromages;
        for(let f of this.fromages){
            this.creeFromage(f);
        }

    }
    /** Fonction qui crée les fromages dans la page HTML
     * @param {fromage} Fromage - le fromage à afficher
    */
    creeFromage(fromage){
        let from = document.createElement("article");
        // Ecrire un titre
        let titre = document.createElement("h3");
        titre.appendChild(document.createTextNode(fromage.nom));
        from.appendChild(titre);
        // Affichage des étoiles
        for(let i=0;i<fromage.classement;i++){
            let etoile = document.createElement("img");
            etoile.src="images/etoile.png";
            etoile.width=16;
            etoile.height=16
            from.appendChild(etoile);
        }
        // Ecrire le type et le pays
        let p = document.createElement("p");
        p.appendChild(document.createTextNode(`Type : ${fromage.type} / Pays : ${fromage.pays}`));
        from.appendChild(p);
        // Ecrire l'article entier
        document.querySelector("section").appendChild(from);
    }
}

