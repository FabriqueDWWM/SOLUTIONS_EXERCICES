/**
 * Appel des données et initialisation des fromages
 */
const xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange', function(e) {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        console.log(JSON.parse(e.currentTarget.response));
        const fromages = new Fromages(JSON.parse(e.currentTarget.response));
    }
});
xhr.open("get", "modele/fromages.json", true);
xhr.send();