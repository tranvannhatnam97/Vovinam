function divideTextIntoLines(text: string): string[] {
	return text.split("\n");
}
function getLinesFromArrayContainingText(
	lines: string[],
	text: string,
): string[] {
	return lines.filter((line) => line.includes(text));
}
function getLinesFromArrayContainingWord(
	lines: string[],
	word: string,
): string[] {
	return lines.filter((line) => line.split(" ").includes(word));
}
function getLinesFromArrayStartWithWord(
	lines: string[],
	word: string,
): string[] {
	return lines.filter((line) => line.trim().startsWith(word));
}
export function getLinesContainsWord(
	originalText: string,
	word: string,
): string[] {
	const lines = divideTextIntoLines(originalText);
	return getLinesFromArrayContainingWord(lines, word);
}
export function getLinesStartWithWord(
	originalText: string,
	word: string,
): string[] {
	const lines = divideTextIntoLines(originalText);
	return getLinesFromArrayStartWithWord(lines, word);
}
export function divideTextToParagraphsStartWithKeyWords(
	text: string,
	word: string[],
): string[] {
	const lines = divideTextIntoLines(text);
	const paragraphs: string[] = [];
	let paragraph = "";
	for (const line of lines) {
		const _line = line.trim();
		if (word.some((w) => _line.startsWith(w))) {
			if (paragraph !== "") {
				paragraphs.push(paragraph);
			}
			paragraph = line;
		} else {
			paragraph += `\n${_line}`;
		}
	}
	return paragraphs;
}
