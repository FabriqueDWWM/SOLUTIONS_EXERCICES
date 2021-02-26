# PPJ aux taquets !!

!! Avant de faire cet exercice, vous devez avoir fait celui-ci : include/README.md !! 

## Encore des dossiers
Pierre, Paul et Jacquot vont avoir besoin d'un dossier intitulé "fonctions" situé à la racine du projet.<br>
Ils créeront la constante correspondante dans config/config.php.<br>
Ils s'aperçoivent qu'il en sera de même pour les classes...<br>

## Encore des include
Les compères remarquent également que leurs pages (accueil,produits,blog,contact,about) comportent du code en commun : les include de la balise head, nav, footer.<br>
Ils en concluent qu'ils pourraient très bien avoir des url de ce type : ppj/index.php?page=accueil. Il leur suffirait de récupérer le paramètre $_GET["page"] et inclure la page correspondante. Tout se ferait dans le fichier index.php !<br> Du coup, les pages pourraient être rangées dans un dossier template/pages, et les sous-parties (nav, footer...) dans un dossier templates/template-parts par exemple.<br>Il faudra penser à créer les constantes correspondantes !<br> De plus, avant d'inclure un fichier, il faudra vérifier que celui-ci existe...<br>
Si le fichier n'existe pas, on redirigera vers une page 404.<br>

## Chacun sa route
L'équipe ppj souhaite tenir à jour la liste des pages disponibles sur le site afin de mieux contrôler les valeurs du paramètre "page" de l'url ($_GET["page]).<br>
Le choix s'oriente vers un fichier config/routes.php contenant un tableau associatif (retourné par l'instruction return) avec pour clés les valeurs du paramètre "page" et pour valeurs les noms des fichiers correspondants à inclure.<br> Par exemple, "accueil"=>"accueil.php". Cela permettra d'inclure un fichier dont le nom n'est pas forcément le même que le paramètre "page". On créera également une constante pour ce tableau.<br>On contrôlera l'existence de cette "route" dans routes.php avant d'inclure le fichier correspondant (en même temps que l'existence du fichier). Dans le cas contraire, on renverra une page 404.<br>

> <i>Comme la suite va significativement modifier la structure de l'application, travaillez sur une copie.</i>

## Et la POO alors ?
La collègue des ppj, Karo, leur a parlé de POO (classes, héritage, interfaces...).<br>
Les ppj souhaitent à présent "moderniser" leur code.<br>
Ben oui ! En POO, on cherche à créer des classes pour les différentes fonctionnalités de l'application. Or pour l'instant, le "routing" s'effectue de manière procédurale dans le fichier template/base.php.<br>
Bon alors, qu'est-ce-qu'on fait ?
Ben, pourquoi pas créer une classe Router (dans le dossier classes) qui posséderait une méthode getTemplate() qui se chargerait d'inclure le bon fichier en fonction de l'url ?..Sans oublier de gérer l'erreur 404...

## Amélioration des urls
Les ppj souhaitent maintenant avoir des urls au format suivant : index.php/accueil.<br>
La valeur "accueil" peut être récupérée via la superglobale $_SERVER (à la place de $_GET["page"] donc).<br>
Il faudra modifier les liens de menus en conséquence (qui seront de la forme : `<a href="accueil">ACCUEIL</a>`).<br>
> La mise en forme des urls sera gérée par des fichiers .htaccess par la suite.







