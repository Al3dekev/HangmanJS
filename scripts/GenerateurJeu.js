/***
 * Permet de desactiver une lettre parmi le clavier de saisie de lettre
  * @param InputLettre
 * @param CouleurFond
 * @constructor
 */
function DesactiverLettre(InputLettre, CouleurFond){
        InputLettre.target.style.backgroundColor = CouleurFond;
        InputLettre.target.style.textDecoration = "line-through";
        InputLettre.target.disabled = true;
}

/***
 * Verifie si la lettre existe dans le mot caché, en fonction, renvoi un booléen.
 * @param event
 * @returns {boolean}
 * @constructor
 */
function VerifierLettre(event){
    let LettreSelectionnee = event.target.defaultValue;
    let ExisteDansLeMot = false;
    RegistreDuMot.MotDecoupe.forEach(LettreDuMot =>{
        if (LettreSelectionnee === LettreDuMot.Lettre.toUpperCase()){
            ExisteDansLeMot = true;
            LettreDuMot.EstDecouverte = true;
        }
    });
    return ExisteDansLeMot
}


/***
 * Verifie si le mot ou la lettre choisie existe et impact le terrain en fonction de resultat
 * @param TypeDeSaisie
 * @param InputSiLettre
 * @constructor
 */
    function MauvaisePioche(TypeDeSaisie, InputSiLettre){ // "Lettre" ou "Mot"
        if(TypeDeSaisie === "Lettre"){
            //let HiddenLetter = document.querySelector(".InterMotADeviner .Mot .\\3" + LettreDuMot.Class);
            DesactiverLettre(InputSiLettre, "red");
            //HiddenLetter.style.color = "red";
        } else if (TypeDeSaisie === "Mot"){
            // Rien pour le moment
        }
}


/***
 * Permet d'enclencher une action sur le terrain s'il s'agit d'une lettre existante dans le mot.
 * @param TypeDeSaisie
 * @param InputSiLettre
 * @constructor
 */
function BonnePioche(TypeDeSaisie, InputSiLettre){ // "Lettre" ou "Mot"
    if (TypeDeSaisie === "Lettre"){
        RegistreDuMot.MotDecoupe.forEach(LettreDuMot =>{
            if (LettreDuMot.EstDecouverte){
                let HiddenLetter = document.querySelector(".InterMotADeviner .Mot .\\3" + LettreDuMot.Class[0] + (LettreDuMot.Class[1] === undefined ? "" : " " + LettreDuMot.Class[1]));
                HiddenLetter.innerHTML = LettreDuMot.Lettre;
                DesactiverLettre(InputSiLettre, "green");
                HiddenLetter.style.color = "green";
            }
        });
    } else if(TypeDeSaisie === "Mot"){
        // Pas encore réalisé
    }

}


/***
 * Permet d'enclencher le processus de fin de partie en fonction d'une défaite ou victoire.
 * @param StatutDePartie
 * @constructor
 */
function FinDePartie(StatutDePartie){
    if(StatutDePartie === "Defaite"){
        alert("Vous avez perdu, le mot été " + RegistreDuMot.Mot);
    }else{
        alert("Vous avez gagné ! Le mot été " + RegistreDuMot.Mot);
    }
    window.location.reload();
}

/***
 * Permet de verifier ou en est le stage du pendu. S'il est au 10e, faire terminer le jeu.
 * @param ExisteDansLeMot
 * @constructor
 */
function VerifierStage(ExisteDansLeMot){
    let img = document.querySelector(".ZoneDeJeu .ZonePendu .ImagePendu");
    if(!ExisteDansLeMot){
        NumeroStageActuel++;
        img.src = "assets/Stage%20" + NumeroStageActuel.toString() + ".png"
    }

    if(NumeroStageActuel === 10){
        img.src = "assets/Stage%2011.png";
        RegistreDuMot.MotDecoupe.forEach(LettreDuMot =>{
            if (!LettreDuMot.EstDecouverte){
                let HiddenLetter = document.querySelector(".InterMotADeviner .Mot .\\3" + LettreDuMot.Class[0] + (LettreDuMot.Class[1] === undefined ? "" : " " + LettreDuMot.Class[1]));
                HiddenLetter.innerHTML = LettreDuMot.Lettre;
                HiddenLetter.style.color = "red";
            }
        });
        setTimeout(function(){
            FinDePartie("Defaite");
        }, 500);
    }

}

/***
 * Permet de savoir si on a complété le mot et que l'on considère que c'est gagné
 * @constructor
 */
function VerifierSiMotComplet(){
    let ToutEstDecouvert = true;
    RegistreDuMot.MotDecoupe.forEach(LettreDuMot =>{
        if(!LettreDuMot.EstDecouverte){
            ToutEstDecouvert = false;
            //break;
        }
    });
    if(ToutEstDecouvert){
        RegistreDuMot.MotDecoupe.forEach(LettreDuMot =>{
            let HiddenLetter = document.querySelector(".InterMotADeviner .Mot .\\3" + LettreDuMot.Class);
            HiddenLetter.style.color = "green";
        });
        setTimeout(function(){
            FinDePartie("Victoire");
        }, 500);
    }
}
