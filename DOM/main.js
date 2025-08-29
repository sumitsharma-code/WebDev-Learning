// // DOM
// // Document Object Model

// // DOM Manupulation
// // Select Html elements
// // Text balna
// // html badlna
// // css badlna
// // even listeners

// // Select Html elements
// // // Id
// // let ab = document.getElementById("ab");
// // console.dir(ab);
// // // Class
// let ab = document.getElementsByClassName("ab");

// for (let i = 0; i < ab.length; i++) {
//   ab[i].hidden = true;
// }
// // // QuerySelector
// // let abcd = document.querySelector("p");
// // console.dir(abcd);
// // // QuerySelectorAll
// // let abcde = document.querySelectorAll("p");
// // console.dir(abcde);

// // Text balna
// let h1 = document.querySelector("h1");
// h1.innerText = "Hey Hey Sumit"; // changes just the text
// h1.textContent = "Hey Hi, Sumit"; // changes text just like innerText
// h1.innerHTML = "<i>Hey</i> ZiKKR"; // changes HTML
// // h1.hidden = true; // to hide

// // html badlna
// let doc = document;
// let a = doc.querySelector("a");
// a.innerHTML = "Listen to ZiKKR";

// a.href = "https://open.spotify.com/artist/3cmuxy1d4dLjlqjR1WlPs7";

// // Attributes Manupulation
// a.setAttribute("href", "https://open.spotify.com/artist/3cmuxy1d4dLjlqjR1WlPs7");

// let img = doc.querySelector("img");
// img.setAttribute("src","https://i.scdn.co/image/ab6761610000939bdadbbe4e088517b74fc0f1db" );

// let p = doc.querySelectorAll("p");
// console.log(p);
// for(let i = 0; i < p.length; i++)
// {
//     p[i].hidden = true;
// }

let doc = document;
let body = doc.querySelector("body");

// let h1 = doc.createElement("h1");
// console.log(h1);
// h1.textContent = "ZiKKR on the Beat";
// body.querySelector("div").append(h1);
// body.querySelector("div").remove(h1);
body.style = "background-color: black; display: flex; justify-content: center;"
let h1 = body.querySelector("h1");
h1.style.color = "red";