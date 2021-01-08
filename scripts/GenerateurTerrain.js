
let RegistreDuMot = {
    "Mot": "",
    "Taille": 0,
    "MotDecoupe": []
};
const ClavierDeLettres = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
let NumeroStageActuel = 0; // Sert a savoir le niveau de pendaison

/***
 * Permet de generer le mot qui servira au jeu parmi une liste pre-etablie.
 */
function genererMot(){
    const ListeDesMotsDujeu = ["Parlement", "Reduit", "Confinement", "Revolution", "Sectorisation", "Origine", "Assurance", "Bataille", "Telephone", "Mangue"];
    for (i in ListeDesMotsDujeu){
        ListeDesMotsDujeu[i] = ListeDesMotsDujeu[i].toUpperCase();
    }
    const ChoisirUnMot = ListeDesMotsDujeu[Math.floor(Math.random() * ListeDesMotsDujeu.length)];

    RegistreDuMot.Mot = ChoisirUnMot;
    RegistreDuMot.Taille = ChoisirUnMot.length;
    let cpt = 1;
    for (let i of ChoisirUnMot){
        RegistreDuMot.MotDecoupe.push({
            "Lettre": i,
            "EstDecouverte": false,
            "Class": cpt.toString()
        });
        cpt++
    }

    const BaliseZone = document.querySelector(".ZoneInteraction .InterMotADeviner .Mot");

    RegistreDuMot.MotDecoupe.forEach(Lettre =>{
        let BaliseLettre = document.createElement("div");
        BaliseLettre.classList.add("Lettre");
        BaliseLettre.classList.add(Lettre.Class);
        BaliseLettre.innerHTML = "_";
        BaliseZone.append(BaliseLettre);
    });


}

/***
 * Permet de générer dynamiquement le clavier, au cas ou l'on souhaite mettre un clavier espagnol ou russe facilement par exemple.
 */
function genererClavier(){

    const ClavierHTML = document.querySelector(".ClavierDeLettres");
    ClavierDeLettres.forEach(Lettre => {
        let baliseLettre = document.createElement("input");
        baliseLettre.type = "button";
        baliseLettre.className = "LettreClavier";
        baliseLettre.value = Lettre;
        ClavierHTML.appendChild(baliseLettre);
    });

}
