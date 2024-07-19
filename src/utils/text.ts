function divideTextIntoLines(text: string): string[] {
	return text.split("\n");
}
function getLinesContainingText(lines: string[], text: string): string[] {
	return lines.filter((line) => line.includes(text));
}
function getLinesContainingWord(lines: string[], word: string): string[] {
	return lines.filter((line) => line.split(" ").includes(word));
}
export function getLinesContainsWord(
	originalText: string,
	word: string,
): string[] {
	const lines = divideTextIntoLines(originalText);
	return getLinesContainingWord(lines, word);
}
