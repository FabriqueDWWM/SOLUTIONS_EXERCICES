<?php
class Router
{
    private array $routes;
    private string $pagesDirectory;

    public function __construct(array $routes, string $pagesDirectory)
    {
        $this->routes = $routes;
        $this->pagesDirectory = $pagesDirectory;
    }

    public function getTemplate()
    {
        if (isset($_GET['page'])) {
            //accueil
            if (array_key_exists($_GET['page'], $this->routes) && file_exists($this->pagesDirectory . "/" . $this->routes[$_GET['page']])) {
                include $this->pagesDirectory . "/" . $this->routes[$_GET['page']]; // accueil.php
            } else {
                // header('Location:index.php?page=page_404');
                include $this->pagesDirectory . "/" . "page_404.php";
            }
        } else {
            include $this->pagesDirectory . "/" . "accueil.php";
        }
    }
}
