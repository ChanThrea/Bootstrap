"use strict";

// --------------------- boucle while ---------------------
// je crée un compteur
let count = 5;
//le début du décompte
let i = 0;

while (i < 6) {
  document.write(" le compte de la boucle while est de" + i + "/5<br>");
  i++;
}

while (i <= count) {
  document.write(" le compte de la boucle while est de" + i + "/5<br>");
  i++;
}

// do while -> elle fait au moins un tour de boucle
let j = 0;

do {
  j = j + 1;
  document.write("<br> le compte de la boucle do while est de " + j + "/5");
} while (j <= 0);

// -------------------------------------------------------
let tabPersonnages = ["mage", "voleur", "rodeur", "guerrier"];
console.log(tabPersonnages);
//nous donne la taille du tableau
let tailleTabPerso = tabPersonnages.length;
console.log(tailleTabPerso);

console.log(tabPersonnages[0]);
console.log(tabPersonnages[1]);
console.log(tabPersonnages[2]);
console.log(tabPersonnages[3]);

for (let k = 0; k < tailleTabPerso; k++) {
  document.write("<br>Le " + tabPersonnages[k] + " attaque");
  if (k === 3) {
    document.write("<br> attaque multiple");
  }
}

// --------------------- for in ---------------------
//pour utiliser les paramètres des objets
let obj = { a: 1, b: 2, c: 3 };

for (let propriete in obj) {
  document.write(`<br> la key :${propriete} -> valeur: ${obj[propriete]}`);
}
