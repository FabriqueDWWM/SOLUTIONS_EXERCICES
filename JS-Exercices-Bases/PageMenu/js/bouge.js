window.onload = function () {
    // Identification des éléments du menu
    const menuCol = document.querySelector(".liste");
    const menuLigne = document.querySelector(".module");
    const menuMax = document.querySelector(".maximise");
    // Récupérer le main pour changer sa classe
    const main = document.querySelector("main");
    // Vidéo à 100%
    menuMax.addEventListener("click", function () {
        main.classList.toggle("videoMax");
    });
    // Vue en colonne
    menuCol.addEventListener("click", function () {
        console.log(main.className);
        if (main.className != "vueColonne") {
            main.classList.add("vueColonne");
        }
    });
    // Vue en ligne
    menuLigne.addEventListener("click", function () {
        if (main.className == "vueColonne") {
            main.classList.remove("vueColonne");
        }
    });
};
