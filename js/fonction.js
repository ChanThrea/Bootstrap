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

// fonction qui se joue toute seule
// une fonction anonyme
(function () {
    console.log("je me joue toute seule");
})();
//fonction anonyme fléché
(() => {
    console.log("je me joue aussi toute seule");
})();

// les variables et les portées 
function add2() {
    let g = 4;
    let a = 2;
    return g + 2;
}
console.log("ma fonction retourne : " + add2());
// a n'existe pas à l'intérieur de ma fonction
console.log(a);
