"use strict";

/** ------------------------ CALCULATRICE-------------------------------------
 *
 *
 * faire les fonction pour l'addition soustraction division et multiplication
 * stocké l'information dans une variable
 *
 *
 *
 * */
// 1- faire une fonction pour l'addition x + y
// 2- si on rajoute un chiffre on continue le calcul
// 3- faire une variable de stockage
// 4- optimiser la fonction addition juste x
// 5-faire les autre fonctions attention a la division par 0
// 6- on test la calculatrice dans le console.log

//la variable pour garder le resultat
// function addition(a, b) {
//   //   let a = 15;
//   //   let b = 3;
//   let add = a + b;
//   console.log(add);
// }
// // addition(argument a=20,argument b = 5)
// addition(20, 5);
// addition(54, 5);
// addition(32, 5);
// addition(15, 5);

// let a = 15;
// let b = 3;
// let soustraction = a - b;
// console.log(soustraction);
// a = 20;
// b = 5;
// soustraction = a - b;
// console.log(soustraction);

function soustraction(a, b) {
  //   let a = 15;
  //   let b = 3;
  //   let soustraction = a - b;
  return console.log(a - b);
}
soustraction(15, 3);
soustraction(21, 7);

//variable pour stocker notre resultat
let result = 0;

function additionCalc(x) {
  // result =0 -> result = result + x
  result += x;
  // ma fonction va me retourner le nouveau resultat
  return result;
}
function soustractionCalc(x) {
  // result =0 -> result = result - x
  result -= x;
  // ma fonction va me retourner le nouveau resultat
  return result;
}
function divisionCalc(x) {
  if (x === 0) {
    return result;
  } else {
    result /= x;
    return result;
  }
}
function multiplicationCalc(x) {
  result *= x;
  return result;
}

function reset() {
  result = 0;
  return result;
}
// reset();

console.log(result);
additionCalc(2);
console.log(result);
additionCalc(8);
console.log(result);
divisionCalc(2);
console.log(result);
divisionCalc(0);
console.log(result);
multiplicationCalc(2);
console.log(result);
multiplicationCalc(0);
console.log(result);
additionCalc(8);
console.log(result);
