import {
	divideTextToParagraphsStartWithKeyWords,
	getLinesStartWithWord,
} from "src/utils/text";
export class Feature {
	private scenarios: Scenario[] = [];
	private text: string;
	private name = "";
	constructor(text: string) {
		this.text = text;
		this.loadFeatureName();
		this.loadScenarios();
	}
	loadFeatureName() {
		const lines = getLinesStartWithWord(this.text, "Feature:");
		if (lines.length <= 0) {
			throw new Error("Feature name not found");
		}
		if (lines.length > 1) {
			throw new Error("Not allow more than one feature name");
		}
		this.text = this.text.replace(lines[0], "");
		this.name = lines[0].replace("Feature:", "").trim();
	}
	getName(): string {
		return this.name;
	}
	getScenariosText() {
		return divideTextToParagraphsStartWithKeyWords(this.text, [
			"Scenario:",
			"Scenario Outline:",
			"BeforeAll:",
			"BeforeEach:",
			"AfterAll:",
			"AfterEach:",
		]);
	}
	loadScenarios() {
		const scenariosText = this.getScenariosText();
		for (const text of scenariosText) {
			const scenario = new Scenario(text);
			this.scenarios.push(scenario);
		}
	}
	getScenarios(): Scenario[] {
		return this.scenarios;
	}
}
class Scenario {
	private steps: Step[];
	private text: string;
	constructor(text: string) {
		this.steps = [];
		this.text = text;
	}
	getText(): string {
		return this.text;
	}
}

class BeforeAll extends Scenario {}
class BeforeEach extends Scenario {}
class AfterAll extends Scenario {}
class AfterEach extends Scenario {}

class Step {
	private line: string;
	constructor(line: string) {
		this.line = line;
	}
}
