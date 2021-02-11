
<h1>Tableaux associatifs</h1>
    <?php
        $activites = array("Lundi"=>"Php","Mardi"=>"Javascript", "Mercredi"=>"Typescript","Jeudi"=>"Angular","Vendredi"=>"SQL","Samedi"=>"Python","Dimanche"=>"Tout");
        var_dump($activites);
        $activites["Dimanche"] = "Rien";
        var_dump($activites);
    ?>

<h1>Deux dimensions</h1>
    <?php
        //deux dimensions
        $pierre = array("1"=>"Php","2"=>"Javascript","3"=>"Python");
        $paul = array("1"=>"Javascript","2"=>"Css","3"=>"Php");
        $jacques = array("1"=>"Java","2"=>"Php","3"=>"Javascript");
    ?>

    <h2>Fusion des tableaux</h2>
        <?php
            //fusion des tableaux
            $preferences = array_merge($pierre,$paul,$jacques);
        ?>
        <h3>Avec les clés originales</h3>
            <?php
                var_dump($preferences);
            ?>
        <h3>Avec de nouvelles clés</h3>
            <?php
                var_dump(array_values($preferences));
            ?>
        <h3>Avec les clés Pierre, Paul et Jacques</h3>
            <?php
                //tableau associatif regroupant les 3 tableaux
                $preferencesAssoc = ["Pierre"=>$pierre, "Paul"=>$paul, "Jacques"=>$jacques];
                var_dump($preferencesAssoc);
            ?>

    <h2>Nombre d'occurences de chaque élément</h2>
        <?php
            //nombre d'occurences de chaque élément
            $nbOccurences = array_count_values($preferences);
            var_dump($nbOccurences);
        ?>
    <h2>Nombre d'occurences de chaque élément - Tri par valeur décroissante</h2>
    <?php
            //tri par valeur
            arsort($nbOccurences);
            var_dump($nbOccurences);
    ?>