// SOLUTION NIVEAU AVANCE

import Chapitre from "./classes/Chapitre.js";

// Ecriture classique de fetch (avec 2 then)

// fetch("./datas/chapitres.json")
//     .then((res) => res.json())
//     .then((datas) => {
//         datas.forEach((chapitre) => {
//             let chap = new Chapitre(chapitre.titre, chapitre.texte);
//             document.body.appendChild(chap.buildHtml());
//         });
//     });

// écriture avec async / await et une closure
(async function () {
    // syntaxe de la closure
    const response = await fetch("./datas/chapitres.json"); // retourne un objet Response
    let chapitres = await response.json(); // un raccourci pour récupérer le body de response
    chapitres.forEach((chapitre) => {
        let chap = new Chapitre(chapitre.titre, chapitre.texte);
        document.body.appendChild(chap.buildHtml());
    });
})(); // syntaxe de la closure

// Ecriture sans closure
// async function getChapitres() {
//     const response = await fetch("./datas/chapitres.json"); // retourne un objet Response
//     let chapitres = await response.json(); // un raccourci pour récupérer le body de response
//     chapitres.forEach((chapitre) => {
//         let chap = new Chapitre(chapitre.titre, chapitre.texte);
//         document.body.appendChild(chap.buildHtml());
//     });
// }

// getChapitres();
