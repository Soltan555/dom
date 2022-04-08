// let x = document;

// let y = Array.from(x);


// y.forEach(element => {
//     console.log(element);
// });



// console.log(x);

// let x = document.getElementsByClassName('seher');

// for (let i = 0; i < x.length; i++) {
//     x[i].style.color = "red";
// }

// console.log(x);


// let x = document.getElementsByTagName('li');

// console.log(x[0]);

// let x = document.querySelector('#test');

// x.style.color = "red";

// console.log(x);


// let x = document.querySelector('ul li:nth-child(2)');

// console.log(x);


// let x = document.querySelector('a');


// x.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log(e.target);
// })


// let element = document.querySelector("h1");

// element.addEventListener('dblclick', (e) => {
//     console.log(e.type);
// })


// let element = document.querySelector('.container');

// // element.addEventListener('mouseover', test);
// // element.addEventListener('mouseenter', test);
// // element.addEventListener('mouseout', test);
// // element.addEventListener('mouseleave', test);
// // element.addEventListener('mousemove', test);

// // function test(e) {
// //     let p = document.querySelector('p');
// //     p.innerHTML = `X : ${e.clientX} - Y : ${e.clientY}`;

// //   element.style.backgroundColor = `rgb(${e.clientX},${e.clientY},${e.clientX-e.clientY})`
// //     element.style.backgroundColor = `#${e.clientX}${e.clientY}`
// // }


// let input = document.querySelector("input");

// input.addEventListener('input', (e) => {
//     // e.preventDefault();
//     let h1 = document.querySelector("h1");
//     h1.innerHTML = input.value;

//     console.log(e.type);
// })





// localStorage.setItem('id','5');
// localStorage.setItem('name','Arif');


// let h1 = document.querySelector('h1');

// h1.innerHTML = localStorage.getItem('name');


// sessionStorage.setItem('id','5');
// sessionStorage.setItem('name','Arif');


// let h1 = document.querySelector('h1');

// h1.innerHTML = localStorage.getItem('name');

// localStorage.clear();


// localStorage.removeItem('name')







let input = document.querySelector('input');
let img = document.querySelector('img');


input.addEventListener('mousemove', img);

function img(e) {
    let p = document.querySelector('p');
    p.innerHTML = `X : ${e.clientX} - Y : ${e.clientY}`;

    img.style.opacity = `(${e.clientX},${e.clientY},${e.clientX-e.clientY})`
    img.style.border - radius = `(${e.clientX},${e.clientY},${e.clientX-e.clientY})`
}