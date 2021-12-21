"use strict";
/**
 *
 * Le DOM => signifie Document Object Model
 * c'est une interface de programmation qui est une représentation du HTML (de la page web)
 *
 * Grâce au DOM on peut injecter du texte, des images, des blocks entiers d'HTML
 *
 *
 *
 */
let selectBody = document.getElementsByTagName("body");
console.log(selectBody); //dans la console c'est un HTMLCollection -> tableau
selectBody[0].style.background = "lightBlue";

let selectBtn = document.getElementsByTagName("button");
console.log(selectBtn);
selectBtn[0].style.fontWeight = "700"; //le premier bouton (fontWeight -> texte en gras)
selectBtn[1].style.fontWeight = "700"; //le deuxième bouton

let tailleSelect = selectBtn.length;
console.log(tailleSelect);
//pour sélectionner tous les boutons je dois faire une boucle
for (let i = 0; i < tailleSelect; i++) {
  selectBtn[i].style.background = "orange";
}

// on peut aussi les sélectionner en fonction de leur class
let selectClassBox = document.getElementsByClassName("box");
console.log(selectClassBox);
selectClassBox[0].style.borderRadius = "15px";

// sélection par l'id
// let tagh1 = document.getElementsByTagName("h1");
let selectH1Id = document.getElementById("selectH1");
console.log(selectH1Id);
selectH1Id.style.visibility = "visible";
// console.log(tagh1);

//queryselector (quand on veut se sélectionner un seul élément)
let gameNoticeTitre = document.querySelector("#gameNoticeTitre");
console.log(gameNoticeTitre.textContent);
// gameNoticeTitre.textContent = "salut";
gameNoticeTitre.style.textTransform = "uppercase";

// querySelectorAll -> quand plusieurs éléments peuvent être sélectionés
let firstCaracPara = document.querySelectorAll(".firstCaracPara");
console.log(firstCaracPara);

//j'utilise comme compteur
for (let j = 0; j < firstCaracPara.length; j++) {
  //ici mon code
  firstCaracPara[j].style.color = "#3333";
  firstCaracPara[j].style.fontSize = "2rem";
}