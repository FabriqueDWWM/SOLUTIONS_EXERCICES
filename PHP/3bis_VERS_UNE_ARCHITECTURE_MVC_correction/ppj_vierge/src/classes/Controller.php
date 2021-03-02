<?php

namespace App;

use App\Bdd;

class Controller
{
    public function accueil()
    {
        $this->render("accueil.php");
    }

    public function page404()
    {
        $this->render('page_404.php');
    }

    private function render($template, $params = null)
    {
        //transforme le tableau $params en variables portant le nom des clés du tableau
        //ces variables sont disponibles dans la vue
        if ($params != null) {
            extract($params);
        }

        include TEMPLATE . '/base.php';
    }
}
