<?php

namespace App;

//chargement du fichier de configuration
require_once 'src/config/config.php';

//chargement automatique des classes du dossier classes
require_once 'src/classes/Autoload.php';
$autoloader = new Autoloader();
$autoloader->register();

//instanciation du kernel (lance l'application)
$kernel = new Kernel();
$kernel->handle();
