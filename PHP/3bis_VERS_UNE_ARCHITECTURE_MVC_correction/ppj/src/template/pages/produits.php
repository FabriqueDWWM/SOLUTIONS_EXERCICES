<div class="container-fluid bg-1">
    <div class="col-md-6 col-md-offset-3">
        <h3 class="margin">Produits</h3>
        <br>
        <div class="row">
            <?php foreach ($produits as $produit) : ?>
                <div class="col-sm-4">
                    <div><?= htmlspecialchars($produit["name"]) ?></div>
                    <img src="<?= IMAGES_PATH . "/" . htmlspecialchars($produit["img_src"]) ?>" class="img-responsive" style="width:100%" alt="Image">
                    <div class="text-center"><?= htmlspecialchars($produit["description"]) ?></div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</div>