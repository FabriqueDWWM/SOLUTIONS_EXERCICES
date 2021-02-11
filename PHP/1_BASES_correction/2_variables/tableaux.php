<?php

$tab = array(15, 22);
$tabCrochets = [15, 22];

var_dump($tab);
var_dump($tabCrochets);

$jours = array("Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");
?>

<h2>Ajout Dimanche</h2>
<?php
$jours[] = "Dimanche"; //ajoute "Dimanche" en fin de tableau
array_push($jours, "Dimanche"); //ajoute "Dimanche" en fin de tableau
var_dump($jours);
?>

<h2>Suppression dernier élément</h2>
<?php
var_dump(count($jours));
unset($jours[count($jours) - 1]); //supprime l'élément du tableau d'indice count($jours)-1 cad 7-1 = 6
var_dump($jours);
?>

<h3>Avec slice</h3>
<?php
$jours_slice = array_slice($jours, 0, count($jours) - 1); //ne conserve que les éléments d'indice de 0 à 6
var_dump($jours_slice);
?>

<h3>Avec splice</h3>
<?php
$jours_splice = array_splice($jours, 6); //ne conserve que les 6 premiers éléments
var_dump($jours);
?>

<h3>Avec unset et search</h3>
<?php
$jours[] = "Dimanche"; //on remet la valeur supprimée
var_dump(array_search("Dimanche", $jours)); //renvoie l'indice de la valeur "Dimanche"
unset($jours[array_search("Dimanche", $jours)]); //supprime l'élément d'indice 6
var_dump($jours);
?>