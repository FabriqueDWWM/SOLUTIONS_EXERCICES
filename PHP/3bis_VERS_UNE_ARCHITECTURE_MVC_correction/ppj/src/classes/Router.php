<?php

namespace App;

class Router
{
    private string $route;
    private string $controllerMethod;

    public function __construct($request)
    {
        $this->route = $request->getPathInfo();
        $this->controllerMethod = "page404";
    }

    public function getControllerMethod()
    {
        //choix de la page dans le tableau associatif        
        if (array_key_exists($this->route, ROUTES)) {
            $this->controllerMethod = ROUTES[$this->route];
        }
        return $this->controllerMethod;
    }
}
