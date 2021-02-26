<?php

namespace App;

class Controller
{
    public function accueil()
    {
        $this->render('accueil.php');
    }

    public function produits()
    {
        $produits = json_decode(file_get_contents(DATAS_PATH . "/produits.json"));
        $this->render('produits.php', ["produits" => $produits]);
    }

    public function blog()
    {
        $articles = json_decode(file_get_contents(DATAS_PATH . "/blog.json"));
        $this->render('blog.php', ["articles" => $articles]);
    }

    public function contact()
    {
        $this->render('contact.php');
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
