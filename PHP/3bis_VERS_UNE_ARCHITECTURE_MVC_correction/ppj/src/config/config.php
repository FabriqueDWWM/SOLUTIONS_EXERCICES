<?php

define('INDEX_PATH', 'PUBLIC');

define('ROOT', "");

define('SRC', ROOT . "src");

define('PUB', "public");

define('ASSETS_PATH', PUB . "/assets");

define('STYLESHEET_DIR_PATH', ASSETS_PATH . "/css");

define('IMAGES_PATH', ASSETS_PATH . "/images");

define("SCRIPTS_PATH", ASSETS_PATH . "/js");

define('TITLE', 'Pierre, Paul et Jacquot');

define('TEMPLATE', SRC . "/template");

define('TEMPLATE_PARTS', TEMPLATE . '/template-parts');

define('PAGES', TEMPLATE . '/pages');

define('ROUTES', include SRC . '/config/routes.php');

define('DATAS_PATH', SRC . '/datas');

define('CLASSES', SRC . "/classes");
