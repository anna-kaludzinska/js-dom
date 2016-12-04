var div = document.getElementById("parSecond");
console.log(div);

var linki = document.getElementsByTagName("a");
console.log(linki);

var linkiPoKlasie = document.getElementsByClassName("link");
console.log(linkiPoKlasie);

var drugiLink = linki[1];
console.log(drugiLink);

for(var i = 0; i<linki.lenght; i++) {
	console.log("tekst");
	console.log(linki[i] + " to jest link " + (i + 1) );
}

/*for(var j = 0; j<10; j++){
	console.log("tekst");
}*/

