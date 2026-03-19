/*
   Name:Jurgen Mondragon
   Date created:
   Date modified:
   Purpose: Homework 1 JS
*/

//dynamic date js code
const d= new Date();
let text=d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

//range slider js code
let slider = document.getElementById("range");
    let output = document.getElementById("range-slider");
    output.innerHTML = slider.value;

    slider.oninput = function () {output.innerHTML = this.value;};
