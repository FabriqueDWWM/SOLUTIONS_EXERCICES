const article = document.querySelector("article");
// Attribution des styles d'arrière plan des divs
article.children[0].style.background =
    "url(./images/paysage_1.jpg) 50% 50% no-repeat";
article.children[1].style.background =
    "url(./images/paysage_2.jpg) 50% 50% no-repeat";
// clic sur l'article contenant les div
article.addEventListener("click", function () {
    // Boucle dans les enfants de l'article. for .. of permet de récupérer les enfants
    // This pointe sur l'élément qui a été cliqué
    console.log(this.children, this);
    for (let pascal of this.children) {
        pascal.classList.toggle("invisible");
    }
});
