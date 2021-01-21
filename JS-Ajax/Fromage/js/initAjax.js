import Fromage from "./Fromage.js";

const xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", function(){
    console.log(xhr.readyState);
    if(xhr.readyState === 4 && xhr.status === 200){
        const datas = JSON.parse(xhr.response);
        for(let fromage of datas){
           const from = new Fromage(fromage.nom, fromage.type, fromage.pays, fromage.classement);
           const htmlFrom = from.getHtml();
           const section = document.querySelector("section");
           section.appendChild(htmlFrom);
        }
    }
});

xhr.open("get", "modele/fromages.json", true);
xhr.send();
