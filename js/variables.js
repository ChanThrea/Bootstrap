"use strict";

// commentaire 1
/*
 *  commentaire 2
 * 
 * 
//  */
//  kamelCase on commence en minuscule et à chaque nouveau moton met une majuscule
//  une variable c'est un espace dans lequel on stock des choses  c'est une boîte que l'on nomme
var unTexte = "voici un texte"; // ce qui est à droite donne sa valeur de ce qui est à gauche/
console.log(unTexte);
unTexte = "nouveau texte"; // on peut changer la valeur d'une variable
console.log(unTexte);
// c'est une constante on ne peut pas la changer
const TVA = 20 / 100;
console.log(TVA);
const tva2 = 5.5 / 100;
console.log(tva2);
// TVA = 25 / 100; => message d'erreur dans la console et stop le code

let unChiffre = 24; //on peut changer la valeur du let
console.log(unChiffre);
unChiffre = 12;
console.log(unChiffre);

let maChainedeCaracteres = "ho ! le beau variant !"; //on peut utiliser les simples ou doubles quote.
// let echapement = "je suis l\'autre chaine de caractère"; ici on echape le caractère.

// ---------------------- LA CONCATENATION ----------------------
let number1 = 10;
number1 = 15;
let phraseNumber = "le chiffre est : " + number1 + " degrés";
console.log(phraseNumber);

//les backtick permettent d'éviter la concaténation
let number2 = "25";
let phrase3 = `le chiffre est : ${number1} ${number2}`;
console.log(phrase3);

// ---------------------- LES TYPES DE VARIABLES ----------------------

let string = "je suis une chaine de caractère";
let number = 24;
let number24 = "24";
console.log(number + parseInt(number24));
let boolean = true; //un boolean est true ou false (vrai ou faux)
let array = ["je", "suis", "Chan", 50, true, false, ["voiture", 15]]; //un tableau
console.log(array); //un tableau commence à l'index 0 =>la première valeur du tableau

let object = {prenom : "chan", age: 25, ville: "Gonesse", km: 2};//l'objet fonctionne avec des key et des value key:value

console.log(object);
//