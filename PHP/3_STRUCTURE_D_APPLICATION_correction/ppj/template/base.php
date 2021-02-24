<!DOCTYPE html>
<html lang="fr">
<?php
require_once CLASSES . "/Router.php";

//la balise head
include_once TEMPLATE_PARTS . '/header.php';
?>

<body>
    <?php
    //la balise nav
    include_once TEMPLATE_PARTS . '/nav.php';

    //le corps de la page
    $router = new Router(ROUTES, TEMPLATE_PAGES);
    $router->getTemplate();

    //la balise footer
    include_once TEMPLATE_PARTS . '/footer.php';
    ?>
</body>

</html>