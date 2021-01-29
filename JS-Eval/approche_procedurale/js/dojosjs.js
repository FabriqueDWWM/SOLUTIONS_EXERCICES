// sélection de la div de l'image de Chuck
const divChuck = document.querySelector("main > section > aside > div");

// ETAPE 1
divChuck.addEventListener("mouseover", function(){
    divChuck.style.borderRadius = "0";
});
divChuck.addEventListener("mouseout", function(){
    divChuck.style.borderRadius = "50%";
});

// ETAPE 2
// articleHeaders est une NodeList (un tableau d'éléments header)
const articleHeaders = document.querySelectorAll("main > section > section > article > header");

articleHeaders.forEach(function(element){ // element est un alias (un nom) pour chaque élément de la liste
    element.addEventListener("click", function(event){ // event est un alias pour l'événement click
        const div = element.nextElementSibling; // cible l'élément suivant qui se trouve au même niveau que element
        console.log(div.style.visibility);
        if(div.style.visibility !== "visible"){ // si la div n'est pas visible au moment du clic, alors on l'affiche
            div.style.visibility = "visible";
            div.style.height = "auto";
        }else{ // si la div est visible au moment du clic, alors on la masque
            div.style.visibility = "hidden";
            div.style.height = "0px";
        }
    });
});

// ETAPE 3
// on cible les éléments qui vont recevoir les liens
const nav = document.querySelector("main > header > nav");
const footer = document.querySelector("main > footer");

// on récupère les données
fetch("data/menu.json")
    .then(response => response.json())
    .then( (datas)=>{
        // menu principal
        datas.principal.forEach(function(element){
            const lien = document.createElement("a");
            lien.textContent = element.nom;
            lien.href = element.lien;
            nav.appendChild(lien);
        });
        // menu footer
        datas.pied.forEach(function(element){
            const lien = document.createElement("a");
            lien.textContent = element.nom;
            lien.href = element.lien;
            footer.appendChild(lien);
        });
    });
