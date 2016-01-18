
window.onload = function() {
  myNameFunction();
}

function myNameFunction () {
	var name = prompt("Please enter your name", "Mr. Awesome!");

	if (person != null) {
		document.getElementById ("name") .innerHTML = "Hello" + person + "!";
	}
}