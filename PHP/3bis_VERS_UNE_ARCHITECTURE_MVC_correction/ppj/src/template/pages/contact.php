<!-- First Container -->
<div class="container-fluid bg-1">
    <h3 class="margin text-center">Contactez-nous</h3>
    <?php if (!is_null($confirmationMessage)) : ?>
        <div><?= $confirmationMessage ?></div>
    <?php endif ?>
    <form class="col-md-6 col-md-offset-3" method="post" action="contact">
        <div class="form-group">
            <label for="inputNom">Nom</label>
            <input type="text" name="nom" class="form-control" id="inputNom" placeholder="Votre nom">
        </div>
        <div class="form-group">
            <label for="inputPrenom">Prénom</label>
            <input type="text" name="prenom" class="form-control" id="inputPrenom" placeholder="Votre prénom">
        </div>
        <div class="form-group">
            <label for="inputEmail">Email</label>
            <input type="email" name="email" class="form-control" id="inputEmail" placeholder="Votre Email">
        </div>
        <div class="form-group">
            <label for="message">Message</label>
            <textarea class="form-control" name="message" rows="5" id="message" placeholder="Votre message"></textarea>
        </div>
        <button type="submit" class="btn btn-default">Envoyer</button>
    </form>
</div>