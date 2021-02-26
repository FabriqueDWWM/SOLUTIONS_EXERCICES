<?php

namespace App;

class Request
{
    private string $url;
    private string $pathInfo;
    private string $method;
    private array $params;

    public function __construct()
    {
        $this->pathInfo = $_SERVER["PATH_INFO"];
        $this->method = $_SERVER["REQUEST_METHOD"];
        $this->params = $_REQUEST;
    }

    /**
     * Get the value of path
     */
    public function getPathInfo(): string
    {
        return $this->pathInfo;
    }
}
