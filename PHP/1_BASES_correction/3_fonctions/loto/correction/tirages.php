<?php
//les variables et constantes

const NB_TIRAGES = 100000;

$monJeu = [1, 2, 3, 4, 5];

$tirages_global = []; // un tableau pour stocker les occurences de chaque n°
global $tirages_global; // on récupèrera la valeur par $GLOBALS["tirages_global"]

$message = "Perdu";

//les tirages
for ($nbTirages = 1; $nbTirages <= NB_TIRAGES; $nbTirages++) {
    $tirage = tirage();

    if (empty(array_diff($tirage, $monJeu))) { //la combinaison $mon_jeu est trouvée
        $message = "J'ai gagné au " . number_format($nbTirages, 0, "", " ") . "ème tirage !";
        break; // on sort de la boucle, inutile de continuer
    }
}
echo $message; //perdu par défaut...sauf si on gagne ;)

//tri du tableau $GLOBALS["tirages_global"]
arsort($GLOBALS["tirages_global"]);
//affichage des statistiques
echo "<h2>Statistiques des tirages par n° (sur " . NB_TIRAGES . " tirages)</h2>";
var_dump($GLOBALS["tirages_global"]);

//la fonction tirage
function tirage()
{
    $tirage = [];
    $num = 1;

    while ($num <= 5) {
        $nb = rand(1, 49);

        if (!in_array($nb, $tirage)) {
            $tirage[$num] = $nb;

            // on compte le nombre fois qu'un n° est sorti; on stocke cela dans $GLOBALS["tirages_global"]
            if (!isset($GLOBALS["tirages_global"][$nb])) {
                $GLOBALS["tirages_global"][$nb] = 1; //lorsqu'un n° sort pour la première fois
            } else {
                $GLOBALS["tirages_global"][$nb]++; //on incrémente la valeur à chaque fois qu'un n° est tiré
            }

            $num++;
        }
    }
    return $tirage;
}
