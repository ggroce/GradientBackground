var _ = require('lodash');

var array = [1,2,3,4,5,6,7,8];

console.log('answer:', _.without(array, 3));

const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let pickedColor1 = color1.value;
let pickedColor2 = color2.value;

console.log(body);

function setGradient() {
	body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
	css.textContent = `${body.style.background};`;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

