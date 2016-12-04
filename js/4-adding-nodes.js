"use strict";

var istniejacyWezel = document.getElementById("parFirst").children[2];
console.log(istniejacyWezel);

var newElement = document.createElement("p");
var newContent = document.createTextNode("To jest nowy paragraf");

newElement.appendChild(newContent);

document.getElementById("parFirst").replaceChild(newElement, istniejacyWezel);

var allLinks = document.querySelectorAll("a");

for (var i = 0; i<allLinks.length; i++) {
	var br = document.createElement("br");
	allLinks[i].parentNode.insertBefore(br, allLinks[i].nextSibling);
}