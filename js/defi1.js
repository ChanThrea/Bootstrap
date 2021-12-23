"use strict";

let checkbox = document.querySelector("#checkbox");
// console.log(checkbox);
let input = document.querySelector("#input");
// console.log(input);
let display = document.querySelector("#display");
console.log(display);

checkbox.addEventListener("click", function () {
  console.log("je click");
  if (checkbox.checked == true) {
    // console.log("la case est checked");
    input.setAttribute("type", "");
    display.textContent = "show";
  } else {
    // console.log("la case n'est pas checked");
    input.setAttribute("type", "password");
    display.textContent = "hide";
  }
});

/*document.getElementById("checkbox").addEventListener("click", function () {
  // switch le type de password à rien
  let caseCoche = "";
  //si la case de la checkbox est coché
  if (document.getElementById("checkbox").checked == true) {
    // change le type de l'input password en ""
    document.getElementById("input").setAttribute("type", caseCoche);
    document.getElementById("display").innerHTML = "show";
  } else {
    //sinon change le type de l'input password en "password"
    document.getElementById("input").setAttribute("type", "password");
    document.getElementById("display").innerHTML = "hide";
  }
});*/

/**
 * je dois toucher le type de l'input
 * j'écoute l'action du user
 *
 */
