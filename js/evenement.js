"use strict";
/**
 * EN HAUT MES VARIABLES
 *
 */
let questionContainer = document.querySelector(".click_event");
console.log(questionContainer);
//pour cibler le bouton 1
let btn1 = document.querySelector("#btn-1");
console.log(btn1);
//pour cibler le bouton 2
let btn2 = document.querySelector("#btn-2");
console.log(btn2);
//la reponse
let reponse = document.querySelector(".reponse");
console.log(reponse);
let reponseF = document.querySelector(".reponseF");
console.log(reponseF);
let inputId = document.querySelector("#inputId");
console.log(inputId.value);
//pour le mousemove
let mouseMove = document.querySelector("#mouseMove");
console.log(mouseMove);
/**
 *
 *
 *
 */
// j'écoute l'action du user sur la boite de ma question
questionContainer.addEventListener("click", function () {
  console.log("je clcik sur la boite de ma question");
});
// questionContainer.addEventListener("click", () => {
//   //mon code ici
// });

// je crée une fonction
function maFonction() {
  console.log("ma fonction est click");
}
// je déclenche ma fonction quand le user click sur la boite de la question
questionContainer.addEventListener("click", maFonction);

btn1.addEventListener("click", function () {
  reponse.style.visibility = "hidden";
  reponse.style.display = "none";
  reponseF.style.display = "block";
  reponseF.style.visibility = "visible";
  questionContainer.style.background = "red";
});

btn2.addEventListener("click", function () {
  reponseF.style.visibility = "hidden";
  reponse.style.display = "block";
  reponseF.style.display = "none";
  reponse.style.visibility = "visible";
  questionContainer.style.background = "green";
});

// MOUSEMOVE
// event = e
window.addEventListener("mousemove", function (event) {
  //on  récupère l'event
  console.log(event);
  mouseMove.style.left = event.pageX + "px";
  mouseMove.style.top = event.pageY + "px";
});

//MOUSEUP MOUSEDOWN
window.addEventListener("mousedown", () => {
  //   mouseMove.style.transition = "ease-in-out 0.25s";
  mouseMove.style.transform = "scale(2) translate(-25%, -25%)";
});
window.addEventListener("mouseup", () => {
  //   mouseMove.style.transition = "ease-in-out 0.25s";
  mouseMove.style.transform = "scale(1) translate(-50%, -50%)";
});

//MOUSEENTER MOUSEOUT
questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "#3333";
});
questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "black";
});
//MOUSEOVER
reponse.addEventListener("mouseover", () => {
  reponse.style.transform = "rotate(5deg)";
});
reponseF.addEventListener("mouseover", () => {
  reponseF.style.transform = "rotate(5deg)";
});
// inputId.value = "toto";

// inputId.addEventListener("input", function () {
//   console.log(inputId.value);
//   let result = parseInt(inputId.value);
//   console.log(result + 2);
// });
