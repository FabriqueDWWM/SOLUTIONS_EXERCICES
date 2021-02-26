<?php

namespace App;

class Kernel
{
    private $request;
    private $router;
    private $controller;

    public function __construct()
    {
        $this->request = new Request();
        $this->controller = new Controller();
        $this->router = new Router($this->request);
    }

    public function handle()
    {
        $controllerMethod = $this->router->getControllerMethod(); //on récupère la méthode du controller à appeler
        if (method_exists($this->controller, $controllerMethod)) {
            $this->controller->$controllerMethod(); //appel de la méthode du controller
        }
    }
}
