console.log("Custom Script Started to be used with Output");
let currentLetter = "a";

updateLetterBox(currentLetter);

function nextLetter() {
	let nextLetter = nextChar(currentLetter);
	updateLetterBox(nextLetter);
}

function nextChar(c) {
	var i = (parseInt(c, 36) + 1) % 36;
	return (!i * 10 + i).toString(36);
}

function restartLetters() {
	updateLetterBox("a");
}

function updateLetterBox(letter) {
	currentLetter = letter;
	$("#LetterBox p").html(currentLetter);
}
