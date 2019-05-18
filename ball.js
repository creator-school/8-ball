	var button = document.getElementById("button");
var input = document.getElementById('input');
var answer = document.getElementById('answer');
var eight = document.getElementById('eight');

button.addEventListener("click", function() {
	if(input.value.length < 1) {
		alert("Please enter a question!");
	}
});