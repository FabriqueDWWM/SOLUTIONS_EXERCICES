import Fromage from "./Fromage1.js";

const promiseFetch = fetch("modele/fromages.json");

console.log(promiseFetch);

promiseFetch
    .then(response => response.json())
    .then(data=> {
        console.log(data);
        console.log(typeof data);
        for(let fromage of data){
            const from = new Fromage(fromage.nom, fromage.type, fromage.pays, fromage.classement);
            const affichage = from.getHtml();
            document.querySelector("section").appendChild(affichage);
        }
    });