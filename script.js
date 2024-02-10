let x = 0;

function add() {
	x = x+1;
	document.getElementById("number").innerHTML = x;
}

function subtract() {
	x = x-1;
	document.getElementById("number").innerHTML = x;
}

function reset() {
	x = 0;
	document.getElementById("number").innerHTML = x;
}
