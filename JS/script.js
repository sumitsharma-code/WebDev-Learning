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

// Symbol -> unique immutable value
// let u1 = Symbol("hehe");
// let u2 = Symbol("hehe");

// let obj = {
//   name : "sumit",
//   age : 21,
//   uid : 1,
//   email : "sumit@gmail.com",
// };

// let u1 = Symbol("uid")
// obj[u1] = "001"; // to create unique thing

// BigINT
// let ghaa = 9007199254740991n;
// console.log(ghaa+7n);

//array
// let a = [1, 2, 3];
// let b = a;
// b[0] = 2; // by reference
// this will make the changes in `a` too
// same is functions, objects

// Dynamic typing
// JS me static typing nhi hai
// can change data type
// data types are dynamic

// in C++ like languages
// int a = 34;
// a = "sumit"; // doesn't support

// in JS
// let a = 12; // number
// a = true; // bool
// a = "sumit"; // string

// Type Coercion (== vs ===)
// Truthy vs Falsy values

// Type Coercion -> concept jisme type apne aap convert ho jayega

// Truthy vs Falsy values
// hr value ko truth ya false me tod rkha hai

// false - 0 false "" null undefined NaN document.all
// true - Rest All

// if(true)
// {
//   console.log("HEY");
// }

// NaN - Not a number
// "ZiKKR" * 2 = NaN // failed number operation

// undefined vs null
// undefined is given by JS as default value
// null is given by the user's end to specify that no value is given

// Operators

// Arithemetic

// + - / * % **

// + does addition and concatination

// - subtract

// / - divide

// * - multiply

// % - remainder (mod)

// ** - exponenciation (power)

// Comparison

// == // compare the value (not type) (not strict)
// === // also checks type (strict)
// != // not equal (not type check) (not strict)
// !== // not equal (type check) (strict)
// >
// <

// Assignment
// =
// +=
// -=
// *=
// /=
// %=

// Logical
// && || !
// && - and
// || - or
// ! - not

// !! to check the true nature
// one ! turns into bool
// another turns into true nature

// Urinary
// +"10" // add + in front of a number me shift hone layak string to convert into Number
// +"sumit" // NaN
// a++
// ++a
// --a
// a--

// Ternary
// ?:
// condition ? true hui ka code : false hui ka code

// 12 > 13 ? console.log("true"): console.log("hui");

// typeof
//qrks
// null - 'object'
// array - 'object'
// NaN - 'number'

// instanceof
// usse janam liya hua
// a instanceof Array;

// Switch
// switch (5) {
//   case 2:
//     console.log("hehe");
//     break;
//   case 4:
//     console.log("hehe");
//     break;
//   default:
//     console.log("A");
// }

// function doit(val) {
//   if (val < 100) {
//     if (val < 50) {
//       if (val < 25) {
//         if (val < 5) {
//           console.log("d");
//           return;
//         }
//         console.log("c");
//         return;
//       }
//       console.log("b");
//       return;
//     }
//     console.log("a");
//     return;
//   }
// }

// doit(49);

// Rock-paper-scissors logic

// function rps(user, computer) {
//   if (user === computer) return "draw";
//   // RS
//   if (user === "rock" && computer === "scissors") return "user";

//   // RP
//   if (user === "paper" && computer === "rock") return "user";

//   // SP
//   if (user === "scissors" && computer === "paper") return "user";

//   return "computer"
// }
// console.log(rps("scissors", "paper"));

// Loops

// For

// for(let a = 0; a < 12; a++)
// {
//   console.log(a);
// }

// While
// let a = 0;
// while (a < 3) {
//   console.log(a);
//   a++;
// }

// Do while
// let i = 12;
// do {
//   console.log(i);
//   i++;
// } while (i < 2);

// q1
// for(let i = 1; i < 11; i++)
// {
//   console.log(i);
// }

// q2
// let a = 10;
// while (a > 0) {
//   console.log(a);
//   a--;
// }

// let a = prompt("give a number");
// if(a == 2)
// {
//   console.log("wah");
// }

// functions

// `...` - Rest operator
// function huaa(...val)
// {
//   console.log(typeof(val));
// }

// huaa(1,2,4,5,4)

// First Class functions
// function discountCal(discount) {
//   return function (price) {
//     return price - price * (discount/100);
//   };
// }

// let mydisc = discountCal(10);
// console.log(mydisc(110));

// Arrays
// let mars = [0, 1, 2, 3, 4, 5];
// console.log(mars[2]);
// let arr = new Array();
// mars.push(32); // Add at last
// console.log(mars);
// mars.pop(); // remove from last
// console.log(mars);
// mars.shift(); // remove from front
// console.log(mars);
// mars.unshift(5); // Add at front
// console.log(mars);
// mars.splice(2,2);
// // mars.splice(start_index, how many values)
// console.log(mars);

// mars = [0, 1, 2, 3, 4, 5];
// console.log(mars);
// let newArr = mars.slice(0,4); // returns new array with sliced values
// mars.slice(start_index, end_index{not included});
// console.log(newArr);

// mars.reverse();

// let sr = mars.sort(function(a, b)  {
//   return b - a;
// });

// console.log(mars);

// For each
// let mars = [0, 1, 2, 3, 4, 5];

// mars.forEach(function(val){
//   console.log(val);
// });

// let mars = [0, 1, 2, 3, 4, 5];
// // Maps
// // use when u want to create a new array

// // Dikhte hi sath black array bnalo
// let newarr = mars.map(function(val){
//   if (val > 1) return 12;
// });

// jaha bhi ek array se new array bnega aur vo array kuch values ko rkhega tab map lgega

// let mars = [0, 1, 2, 3, 4, 5];
// Filter
// let newArr = mars.filter(function(val){
//   if (val > 2) return true;
// });

// let mars = [0, 1, 2, 3, 4, 5];
// Reduce
// when we want a single number at last
// let newArr = mars.reduce(function (accumulator, val) {
//   return accumulator - val;
// }, 0);
// this 0 is the value of accumulator at the start

let obj = {
  name: "sumit",
  age: 21,
  khana: "Kheer"
};

console.log(obj["age"]);
let obj2 = JSON.stringify(obj);
console.log(obj2);