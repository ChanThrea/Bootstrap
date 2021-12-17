"use strict";
//je crée un tableau de couleur
let tabColor = ["rouge", "bleu", "vert", null];
console.log(tabColor[0]);
//connaître la taille d'un tableau
console.log(tabColor.length); //3 entrées
//pour entrer une nouvelle valeur dans un tableau
tabColor.push("violet");
console.log(tabColor);
//supprimer le dernier élément du tableau
tabColor.pop();
console.log(tabColor);
//supprimer le premier élément du tableau
tabColor.shift();
console.log(tabColor);
//ajouter au début
tabColor.unshift("orange");
console.log(tabColor);
//trouver l'index d'un élément dans le tableau
tabColor.indexOf("bleu");
console.log(tabColor.indexOf("bleu"));
//supprimer un élément à son index
tabColor.splice(3);
console.log(tabColor);

//
let tabtest = ["un", "deux", [1, 2]];
console.log(tabtest); 
console.log(tabtest[0]);// retourne un
console.log(tabtest[2][0]); //retourne 1
console.log(tabtest[0] + tabtest[2][0]); //cela retourne un1 dans la console