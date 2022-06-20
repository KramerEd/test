const board = document.querySelector("#board");
const colors = [
	"red",
	"blue",
	"green",
	"yellow",
	"purple",
	"white",
	"orange",
	"silver",
	"pink",
];
const squareNumber = 600;

for (let i = 0; i < squareNumber; i++) {
	const square = document.createElement("div");
	square.className = "square";

	square.addEventListener("mouseover", () => {
		setColor(square);
	});

	square.addEventListener("mouseleave", () => {
		removeColor(square);
	});

	board.append(square);
}

function setColor(e) {
	const color = getRandomColor();
	e.style.backgroundColor = color;
	e.style.boxShadow = `0 0 10px ${color}, 0 0 10px ${color}, 0 0 10px ${color}`;
}
function removeColor(e) {
	e.style.backgroundColor = "#1d1d1d";
	e.style.boxShadow = `0 0 10px #000`;
}

function getRandomColor() {
	const index = Math.floor(Math.random() * colors.length);
	return colors[index];
}
