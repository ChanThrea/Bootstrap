"use strict";

//affectation après addition
let a = 10;
let b = 5;
let addition = b + a;//15
console.log(addition);
a = a + b; //a=>15
a += b; //15 +5 =>20 donc a=20
console.log(a);//20

//affectation après soustraction
//a=20
//b=5
a -= b; //15
console.log("a est égale à : " + a);

//affectation après multiplication
let multiplication = a * b;//15 * 5 => 75
console.log(multiplication);
a *= b;
console.log(a);//75

//affectation après division
let division = a / b;
console.log(division); //15
a /= b;
console.log(a); //15

//affectation  du reste -> modulo %
let c = 3;
let d = 10;
let e = 9;
let reste = d % c;//10 % 3 -> 
console.log(reste);//1
let reste2 = e % c; //
console.log(reste2);

//affectation après puissance
let puissance = d ** c; //10 puissance 3
console.log("le résultat est : " + puissance);

// incrémentation
let total = 10;
total++;//11
console.log(total);

// décrémentation
total--;//10
console.log(total);