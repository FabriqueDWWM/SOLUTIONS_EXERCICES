# Arf !

Arf ! Les ppj sont contents, mais Paul, revenant d'un séminaire sur l'achitecture MVC, a des informations nouvelles qu'il souhaite absolument partager avec son équipe.

Paul fait le constat suivant :

- la structure de dossiers n'est pas protégée contre le parcours depuis un navigateur (par exemple : http://localhost/ppj/template).
- le router accomplit une tâche qui ne lui incombe pas : il inclut un template (il devrait simplement orienter vers le bon fichier en fonction de l'url).
- les données (produits, articles de blog) sont "en dur" dans le code (répétitions).

# Modification de l'architecture

Paul propose de modifier l'architecture. Il souhaite :

- un dossier intitulé "public" à la racine de l'application, qui contiendra le dossier assets.
- un dossier intitulé "src" à la racine de l'application, qui contiendra les dossiers classes, config, fonctions, et template (tout sauf index.php qui reste à la racine de l'application).
  Voici l'architecture souhaitée :
- ppj
  - public
    - assets
  - src
    - classes
    - config
    - fonctions
    - template
  - index.php

Il faut placer un fichier .htaccess dans le dossier src. Ce fichier .htaccess doit contenir le code suivant :

> Deny from all

# Un controller pour les contrôler tous

Si le router ne fait plus l'inclusion de template, il faut dédier cette fonctionnalité à une autre classe : la classe Controller !

Dans le dossier classes, les ppj créent une classe Controller. Dans cette classe, ils créent une méthode publique pour chaque route, sur le modèle suivant :

> class Controller
>
> {
>
> public function accueil()
>
> {
>
> $this->render('accueil.php');
>
> }
>
> ...autres méthodes
>
> }

Ensuite, ils ajoutent à cette classe, une méthode privée render(), qui sera chargée d'effectuer les include.
