// ----- exercice -- 01
/**
 * 1- Demandes au user d'écrire une couleur primaire dans un prompt (bleu jaune rouge)
 * 2- tester la couleur entrée en chaine de caractère
 * 3- afficher dans la page "Bravo la couleur .... est une couleur primaire"
 * 4- la couleur choisie c'est pas une couleur primaire
 *  
 */

let couleur = prompt("Entrez une couleur primaire");
console.log(couleur);

if (couleur === "rouge" || couleur === "bleu" || couleur === "jaune") {
    console.log("Bravo la couleur choisie est une couleur primaire");
} else {
    console.log("la couleur choisie n'est pas une couleur primaire");
}