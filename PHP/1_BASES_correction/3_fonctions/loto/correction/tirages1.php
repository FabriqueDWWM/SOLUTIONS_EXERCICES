<?php
/*
// VARIANTE :
// Ici, on crée dans une boucle infinie des tirages jusqu'à ce que l'on tombe sur les combinaison jouée
// On mesure le temps et le nombre d'essais qu'il a fallu pour tomber sur la bonne combinaison
*/

set_time_limit(600); //on allonge la durée maximale d'exécution du script (en secondes)

//début du script
$ts_debut = time();
echo "Timestamp début : " . $ts_debut;

$monJeu = [1, 2, 3, 4, 5];

//les tirages effectués par le script : tant qu'on ne tombe pas sur la combinaison jouée
$nbTirages = 0;
do {
    $tirage = tirage();
    $nbTirages++;
} while (!empty(array_diff($tirage, $monJeu)));

//Affichage des stats
$message = "J'ai gagné au " . number_format($nbTirages, 0, '', ' ') . " ème tirage !";
echo "<br>" . $message;
var_dump($tirage); //on affiche le tirage gagnant
$ts_fin = time();
echo "Timestamp fin : " . $ts_fin;

$ts_ecart = $ts_fin - $ts_debut;
echo "<br>Durée : " . date("H:i:s", $ts_ecart);

//la fonction tirage
function tirage()
{
    $tirage = array();
    $num = 1;
    while ($num <= 5) {
        $nb = rand(1, 49);
        if (!in_array($nb, $tirage)) {
            $tirage[$num] = $nb;
            $num++;
        }
    }
    return $tirage;
}
