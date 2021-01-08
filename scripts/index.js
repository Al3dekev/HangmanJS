genererMot();



console.log(ClavierDeLettres);


let elem = document.querySelector(".ClavierDeLettres");
console.log(elem);

genererClavier();


// Mettre tout les addEventListenner ici


//Je clique sur une lettre
// Je parcours le mot et je vérifie si une lettre existe
// si une lettre existe, booléen a true et je fais découvrir la lettre en mettant EstDecouvert a true
// je continue jusqu'a la fin du parcours

const InputLettre = document.querySelectorAll("input.LettreClavier")

InputLettre.forEach(value => {
    value.addEventListener("click", function(e){
       let LettreSelectionnee = e.target.defaultValue;
       let ExisteDansLeMot = false;
       RegistreDuMot.MotDecoupe.forEach(LettreDuMot =>{
          if (LettreSelectionnee === LettreDuMot.Lettre){
              ExisteDansLeMot = true;
              LettreDuMot.EstDecouverte = true;
          }
       });



    });
});
