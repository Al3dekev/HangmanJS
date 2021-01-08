genererMot();
genererClavier();

const InputLettre = document.querySelectorAll("input.LettreClavier");
InputLettre.forEach(value => {
    value.addEventListener("click", function(e){
       let ExisteDansLeMot = VerifierLettre(e);
       if (ExisteDansLeMot){
           BonnePioche("Lettre", e);
           VerifierSiMotComplet();
       } else {
           MauvaisePioche("Lettre", e)
       }
        VerifierStage(ExisteDansLeMot);
    });
});

const DevinerMotEntier = document.querySelector("input.MotEntier");

DevinerMotEntier.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        if (DevinerMotEntier.value !== ""){
            if(DevinerMotEntier.value.toUpperCase() === RegistreDuMot.Mot){
                DevinerMotEntier.style.color = "green";
                RegistreDuMot.MotDecoupe.forEach(LettreDuMot =>{
                    let HiddenLetter = document.querySelector(".InterMotADeviner .Mot .\\3" + LettreDuMot.Class[0] + (LettreDuMot.Class[1] === undefined ? "" : " " + LettreDuMot.Class[1]));
                    HiddenLetter.innerHTML = LettreDuMot.Lettre;
                    LettreDuMot.EstDecouverte = true;
                    HiddenLetter.style.color = "green";
                });
                VerifierSiMotComplet();
            }else{
                DevinerMotEntier.style.color = "red";
                VerifierStage(false)
            }
        }
    }

});
