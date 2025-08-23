//var let const
// var a;
// var ab = 1;
// let c = 12;
// const d = 12;

//don't write 'const a;'
//value bhi deni hai

//declaration and intialization

// var a = 12;
// Window mein add karta hai
// Function scoped hota hai
// Var can be used in function
// function abcd() {
//   if (true) {
//     var a = 245;
//   }
//   console.log(a);
// }
// abcd();
//Aap firse declare kr skte ho
//and error nhi ayega
// var a = 4; // no error given here

//const

// const discount = 10;
//value won't change
//discount = 4; // error

//Scope (global, block, funcitonal)

// var acha = 12;

{
  //there is no function keyword but var is function scoped
  //   var b = 12;
}
// console.log(b);
// to avoid this confusion we don't use var
//let is best

//Reassignment, Redeclaration
// var a = 12;
// a = 32; // Re-Assignment
// var a = 345; // redeclaration is possible with 'var'

// let bro = 3;
// bro = 5; // Re-Assignment
// let bro = 3; // Re-Declaration error

// Temporal Dead Zone
// TDZ = area jitne me JS ko pta to hai ki variable exist krta hai wo aapko value nhi de skta
// console.log(temp); //js knows that its defined after using it (Hoisiting)
//
//
//
// THIS IS TDZ OF VARIABLE `temp`
//
//
//
// let temp = 13; (uncomment to see)
//  ^
//  |
//  |
//  |
//  |
//  |
// Hoisting impact per type
// Hoisting -> jab ek variable bnta hai to uska declaration wala part upr chla jata hai and intialization wala part neeche reh jata hai

// var a = 12;
// var a = undefined; goes on top (thats why error nhi ata and js knows that a variable is defined upr)
// a = 12; neeche reh jata hai

// Hoisting teeno me hoti hai var let const

// var -> hoist -> undefined
// let -> hoist -> no value (reference error)
// const -> hoist -> no value (reference error)

// Questions
// console.log(nm); // undefined
// var nm = "harsh";

// console.log(age);
// Reference Error--> can't access before intitalization
// let age = 21;

// let ak = 10;
// {
//     let ak = 4;
// }
// console.log(ak);

// Data Types
// Data ka type

// 1. Premitives -> esi values jinko copy krne pe REAL COPY milti hai
//  (string number boolean null undefined symbol bigint)

// 2. reference -> reference milega parent ka
// (Arrays, objects, functions)
// []        {}       ()

// let a = 12;
// let b = a;
// a = a + 2;

//array
let a = [1, 2, 3];
let b = a;
b[0] = 2; // by reference
// this will make the changes in a too

