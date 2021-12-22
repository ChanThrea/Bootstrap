"use strict";
/**
 *  EN HAUT MES VARIABLES
 *
 */
let questionContainer = document.querySelector(".click_event");
console.log(questionContainer);
// pour cibler le bouton 1
let btn1 = document.querySelector("#btn-1");
console.log(btn1);
//pour cibler le bouton 2
let btn2 = document.querySelector("#btn-2");
console.log(btn2);
//la reponse
let reponse = document.querySelector(".reponse");
console.log(reponse);
// pour le mousemove
let mouseMove = document.querySelector("#mouseMove");
/**
 *
 *
 *
 */
// j'écoute l'action du user sur la boîte de ma question
questionContainer.addEventListener("click", function () {
  console.log("je click sur ma boîte de ma question");
});

//questionContainer.addEventListener("click", () => {
//  //mon code ici
// });

// je crée une fonction
function maFonction() {
  console.log("ma fonction est click");
}

// je déclenche ma fonction quand le user click sur la boîte de la question
questionContainer.addEventListener("click", maFonction);

btn1.addEventListener("click", function () {
  reponse.style.visibility = "hidden";
  reponse.style.display = "none";
  reponse.style.display = "block";
  reponse.style.visibility = "visible";
  questionContainer.style.background = "red";
});

btn2.addEventListener("click", function () {
  reponse.style.visibility = "hidden";
  reponse.style.display = "none";
  reponse.style.display = "block";
  reponse.style.visibility = "visible";
  questionContainer.style.background = "green";
});

// MOUSEMOVE
// event = e
window.addEventListener("mousemove", function (event) {
  // on récupère l'event
  console.log(event);
  mouseMove.style.left = event.pageX + "px";
  mouseMove.style.top = event.pageY + "px";
});

// MOUSEUP MOUSEDOWN
window.addEventListener("mousedown", () => {
    mouseMove.style.transform = "scale(2) translate(-25%, -25%)";
window.addEventListener("mousedown", () => {
    mouseMove.style.transform = "scale(1) translate(-50%, -50%)";
});



// inputId.value = "toto";

// inputId.addEventListener("input", function () {
// console.log(inputId.value);
// let result = parseInt(inputId.value);
// console.log(result + 2);
// });
