//funcion para mostrar el dropdown
function drop() {
	document.getElementById("myDropdown").classList.toggle("show");
}
//funcion para desplazar los contenidos del dropdown
window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}
//funcion para mostrar el contenido del boton sprint1
var myFunctionsprint1 = function (sprint) {
	var divtext = document.getElementById(sprint);
	var divtext3 = document.getElementById("infoSprint3");
	var divtext2 = document.getElementById("infoSprint2");
	if (divtext.style.display == "block") {
		divtext.style.display = "none";
	}else{
		divtext.style.display = "block";
		divtext3.style.diplay = "none";
		divtext2.style.diplay = "none";
	}
}
//funcion para mostrar el contenido del boton sprint2
var myFunctionsprint2 = function (sprint) {
	var divtext = document.getElementById(sprint);
	var divtext1 = document.getElementById("infoSprint1");
	var divtext3 = document.getElementById("infoSprint3");
	if (divtext.style.display == "block") {
		divtext.style.display = "none";

	}else{
		divtext.style.display = "block";
		divtext1.style.diplay = "none";
		divtext3.style.diplay = "none";
	}
}
//funcion para mostrar el contenido del boton sprint3
var myFunctionsprint3 = function (sprint) {
	var divtext = document.getElementById(sprint);
	var divtext1 = document.getElementById("infoSprint1");
	var divtext2 = document.getElementById("infoSprint2");
	if (divtext.style.display == "block") {
		divtext.style.display = "none";
	}else{
		divtext.style.display = "block";
		divtext1.style.diplay = "none";
		divtext3.style.diplay = "none";
	}
}
