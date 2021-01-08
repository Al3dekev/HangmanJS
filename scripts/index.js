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
