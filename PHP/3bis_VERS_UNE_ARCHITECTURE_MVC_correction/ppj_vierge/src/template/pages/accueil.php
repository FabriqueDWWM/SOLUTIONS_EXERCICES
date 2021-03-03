<h1>Accueil</h1>

<?php
// var_dump($users); // permet de vérifier que les données sont disponibles dans la vue
?>
<!-- Un exemple d'affichage de données -->
<table class="table">
    <thead>
        <th>Nom</th>
        <th>Prénom</th>
    </thead>
    <tbody>
        <?php foreach ($users as $user) : ?>
            <tr>
                <td><?= $user["nomUser"] ?></td>
                <td><?= $user["prenomUser"] ?></td>
            </tr>
        <?php endforeach ?>
    </tbody>
</table>