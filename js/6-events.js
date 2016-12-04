"use strict";

var pierwszyLink = document.getElementsByClassName("link")[0];
var drugiLink = document.getElementsByClassName("link")[1];

/*
function showText() {
	console.log("click");
}

pierwszyLink.onclick = showText;

drugiLink.onclick = showText;
*/

/*function showText() {
	console.log("click");
}

pierwszyLink.addEventListener("click",showText);
drugiLink.addEventListener("click",showText);*/

/*
var naglowek = document.getElementById("main-header");

function changeText() {
	naglowek.style.fontSize = "70px";
}

naglowek.onmouseover = changeText;
*/

var naglowek = document.getElementById("main-header");

naglowek.onmouseover = changeText;
naglowek.onmouseout = changeText;

function changeText(e) {
	if (e.type == "mouseover") {
		naglowek.style.color = "red";
	} else {
		naglowek.style.color = "inherit";
	}	
}

document.getElementsByTagName("header")[0].onclick = clickHeader;

function clickHeader() {
	
	alert("kliknęłaś w header");
}

document.getElementsByTagName("h1")[0].onclick = clickH1;

function clickH1(e) {
	e.stopPropagation();
	alert("kliknęłaś w h1");
}
