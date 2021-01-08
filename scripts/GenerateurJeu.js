






    /***
     * Permet de verifier, lorsque l'utilisateur tape un mot complet, si ce mot correspond a celui du jeu
     * @constructor
     */
    function VerifierMot(Mot){
        if (Mot.toUpperCase() === RegistreDuMot.Mot.toUpperCase()){
            BonnePioche("Mot")
    } else{
            MauvaisePioche("Mot")
        }
}


function VerifierLettre(){

}


    /***
     * Verifie si le mot ou la lettre choisie existe et impact le terrain en fonction de resultat
     * @constructor
     */
    function MauvaisePioche(TypeDeSaisie){ // "Lettre" ou "Mot"

        // +1 au stage du pendu
}


function BonnePioche(TypeDeSaisie){ // "Lettre" ou "Mot"
        if (TypeDeSaisie === "Lettre"){
            //  Sur clavier, griser la lettre correspondante + couleur vert
        }

}

    /***
     * Permet de verifier ou en est le stage du pendu. S'il est au 10e, faire terminer le jeu.
     * @constructor
     */
    function VerifierStage(){

}



function Defaite(){
    // Afficher les lettres manquantes en rouge
    // Alerte avec message de defaite + le mot
}

function Victoire(){
    // Rendre toutes les lettres en verte
    // Alerte de victoire + mot trouvé
}
