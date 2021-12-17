"use strict";

let xCondition = 2; //number
let yCondition = 3; //number
let wCondition = "2"; //string
let zCondition = 3; //number

// test si xCondition (2) est plus petit que yCondition (3)
if (xCondition < yCondition) {
  console.log("xCondition est inférieur à yCondition");
}

// test si xCondition (2) est plus grand que yCondition (3)
if (xCondition > yCondition) {
  console.log("xCondition est supérieur à yCondition");
} else {
  console.log("xCondition est inférieur à yCondition");
}

// test si xCondition existe
if (zCondition) {
  console.log("ma variable zCondition existe");
}
//quand ma variable a comme valeur null la condition est false
let aCondition = null;
if (aCondition) {
  console.log("ma variable aCondition existe");
}

//test si xCondition différent de 3
if (xCondition != 3) {
  console.log("xCondition est différent de 3");
}

//test d'égalité
if (xCondition == wCondition) {
  console.log("ils sont égaux mais pas en typage une string et un number");
}

//test d'égalité strict
if (yCondition === zCondition) {
  console.log("ils sont strictement égaux en valeur et en typage");
}

//test si l'une des deux conditions est vraie
if (xCondition == 2 || yCondition == 2) {
  console.log("l'un des deux est vrai");
}

// si les deux sont vrais
if (xCondition === 2 && wCondition == 2) {
  console.log("les deux sont vraies");
}

// on peut faire un if sur une seule ligne s'il n'y a qu'une instruction
if (xCondition === 2 && wCondition == 2)
  console.log("les deux sont à nouveau vraies");

// une autre façon d'écrire un if -> les ternaires
// si vrai ? alors instruction : sinon (else)
// ? -> est-ce que ma condition est vraie alors j'exécute le code après le ?
// : -> else puis le code que j'exécute si la condition n'est pas vraie
xCondition != yCondition
  ? console.log("ils sont différents")
  : console.log("ils sont identiques");

// ------------------- le switch -------------------
let fruit = "pomme";
fruit = "poire";
fruit = "cerise";
switch (fruit) {
  case "pomme":
    console.log("c'est une pomme !");
    break;
  case "poire":
    console.log("c'est une poire !");
    break;

    default:
        console.log("ce n'est ni une pomme, ni une poire");
}
