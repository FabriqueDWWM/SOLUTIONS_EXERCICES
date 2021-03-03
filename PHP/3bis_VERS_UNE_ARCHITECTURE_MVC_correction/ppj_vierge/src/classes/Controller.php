<?php

namespace App;

use App\Bdd;

class Controller
{
    public function accueil()
    {
        // les constantes utilisée ci-dessous sont définies dans config/config.php
        $conn = new \PDO("mysql:host=" . HOST . ";dbname=" . DBNAME, SQLUSER, SQLPWD);
        // var_dump($conn);die(); // permet de vérifier que la connexion à la bdd est ok
        $req = $conn->prepare("SELECT * from user");
        $req->execute();
        $users = $req->fetchAll(\PDO::FETCH_ASSOC);
        // var_dump($users); // permet de visualiser le résultat de la requête Sql
        // die();
        $this->render("accueil.php", ["users" => $users]);
    }

    public function page404()
    {
        $this->render('page_404.php');
    }

    public function test()
    {
        $this->render('test.php');
    }

    private function render($template, $params = null)
    {
        //transforme le tableau $params en variables portant le nom des clés du tableau
        //ces variables sont disponibles dans la vue
        if ($params != null) {
            extract($params); // $activites
        }

        include TEMPLATE . '/base.php';
    }
}
