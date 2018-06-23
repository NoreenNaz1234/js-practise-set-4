function calculateSquare() {
	let userInput = parseInt(document.querySelector("input").value);
	let squareOfNum = userInput * userInput;
	alert("The square of " + userInput + " is " + squareOfNum);
}