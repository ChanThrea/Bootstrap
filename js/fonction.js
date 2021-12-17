"use strict";
// on déclare une fonction avec le mot function
function avanceVersLeNord() {
    // ici on met le code
    console.log("je pars vers le Nord");
    console.log("je fais 10 km")
}
// on fait appel à la fonction
avanceVersLeNord();
avanceVersLeNord();
avanceVersLeNord();


//function nom(argument){}
//on peut mettre plusieurs arguments dans nos fonctions
function avanceVersOuest(distanceDeMarche,gourde) {
    console.log("je pars vers l'Ouest");
    console.log("je fais "+ distanceDeMarche+" km");
    console.log("je bois à ma gourde " + gourde);
}

avanceVersOuest(25, "thé et du lait");
let contenu = "du coca";
avanceVersOuest(25, contenu);
