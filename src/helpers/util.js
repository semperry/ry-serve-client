export const stripLocation = (str) => {
	return str
		.split("/")
		.map((piece) => {
			if (piece) return piece[0].toUpperCase() + piece.slice(1);
		})
		.join(" ")
		.trim();
};
