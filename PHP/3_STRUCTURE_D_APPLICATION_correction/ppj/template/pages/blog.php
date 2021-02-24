<div class="container-fluid bg-1">
    <div class="col-md-6 col-md-offset-3">
        <h3 class="margin">Blog</h3>
        <?php
            $articles = json_decode(file_get_contents(DATAS_PATH."/blog.json"));

            foreach ($articles as $article):
        ?>
                <h1><?= $article->titre ?></h1>
                <p><?= $article->texte ?></p>
            <?php endforeach; ?>
    </div>
</div>