<?php

namespace App;

/**
 * Class Autoloader
 * @package App
 */
class Autoloader
{
    /**
     * Enregistre notre autoloader
     */
    static function register()
    {
        spl_autoload_register(array(__CLASS__, 'autoload'));
    }

    /**
     * Inclut le fichier correspondant à notre classe
     * @param $class string Le nom de la classe à charger
     */
    static function autoload($class)
    {
        $class = str_replace(__NAMESPACE__ . '\\', '', $class);
        $class = str_replace('\\', '/', $class);
        require_once CLASSES . '/' . $class . '.php';
    }

    // pour une bonne explication du mecanisme autoload :
    // https://www.developpez.net/forums/d1850217/php/langage/explication-fonction-spl_autoload_register/

}
