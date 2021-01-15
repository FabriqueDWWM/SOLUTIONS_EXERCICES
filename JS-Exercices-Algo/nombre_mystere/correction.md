# Etape 1

VAR nombreMystere : entier, nombreUtilisateur : entier, nombreEssais : entier, reponse : boolean

DEBUT
    nombreEssais = 0
    nombreUtilisateur = 0
    Calculer nombreMystere

    TANT QUE reponse = true
        TANT QUE nombreUtilisateur <> nombreMystere
            Afficher "Saisir votre nombre : "
            Saisir nombreUtilisateur
            nombreEssais = nombreEssais + 1
            SI nombreUtilisateur < nombreMystere
                ALORS Afficher "Trop petit"
            SINON SI nombreUtilisateur > nombreMystere
                ALORS Afficher "Trop grand"
            SINON Afficher "Gagné en " & nombreEssais & " coups."

        FIN TANT QUE
        Afficher "Voulez-vous rejouer ?"
        Saisir reponse // 0 ou 1
    FIN TANT QUE
    Afficher "Bye"
FIN