<?php

namespace App;

use App\Bdd;

class Controller
{
    public function accueil()
    {
        $this->render('accueil.php');
    }

    public function produits()
    {
        // $produits = json_decode(file_get_contents(DATAS_PATH . "/produits.json"));
        $conn = new \PDO("mysql:host=" . HOST . ";dbname=" . DBNAME, SQLUSER, SQLPWD);
        $req = $conn->prepare("SELECT * FROM produits");
        $req->execute();
        $produits = $req->fetchAll(\PDO::FETCH_ASSOC);
        $this->render('produits.php', ["produits" => $produits]);
    }

    public function blog()
    {
        $articles = json_decode(file_get_contents(DATAS_PATH . "/blog.json"));
        $this->render('blog.php', ["articles" => $articles]);
    }

    public function contact()
    {
        $confirmationMessage = null;
        // var_dump($_POST);
        if (isset($_POST["nom"]) && isset($_POST["prenom"]) && isset($_POST["email"]) && isset($_POST["message"])) {
            $confirmationMessage = "Votre message n'a pas pu être envoyé.";
            $nom = htmlspecialchars($_POST["nom"]);
            $prenom = htmlspecialchars($_POST["prenom"]);
            $email = htmlspecialchars($_POST["email"]);
            $message = htmlspecialchars($_POST["message"]);
            if ($nom != "" && $prenom != "" && $email != "" && $message != "") {
                // insertion en bdd
                // envoi de mail
                $confirmationMessage = "Votre message a bien été envoyé.";
            }
        }

        $this->render('contact.php', ["confirmationMessage" => $confirmationMessage]);
    }

    public function about()
    {
        $this->render('about.php');
    }

    public function page404()
    {
        $this->render('page_404.php');
    }

    public function jsonToto()
    {
        echo json_encode(['toto' => 'toto']);
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
