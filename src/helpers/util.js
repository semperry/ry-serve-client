export const stripLocation = (str) => {
	return str
		.split("/")
		.filter((piece) => piece)
		.map((piece) => piece[0].toUpperCase() + piece.slice(1))
		.join(" ")
		.trim();
};
