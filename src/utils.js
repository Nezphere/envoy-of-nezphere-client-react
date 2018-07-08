const toFullWidthChar = (c) => {
	if (0x0020 < c && c < 0x007F) return 0xFF00 + (c - 0x0020);
	if (0x0020 === c) return 0x3000;
	return c;
};

const toHalfWidthChar = (c) => {
	if (0xFF00 < c && c < 0xFF5F) return 0x0020 + (c - 0xFF00);
	if (0x3000 === c) return 0x0020;
	return c;
};

const process = (processor, str) => String.fromCharCode(...Array.prototype.map.call(str, (_, i) => processor(str.charCodeAt(i))));

export const toFullWidth = process.bind(null, toFullWidthChar);
export const toHalfWidth = process.bind(null, toHalfWidthChar);