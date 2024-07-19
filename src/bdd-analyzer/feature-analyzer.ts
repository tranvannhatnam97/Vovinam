import { getLinesContainsWord } from "src/utils/text";
export class Feature {
	private scenarios: Scenario[];
	private text: string;
	constructor(text: string) {
		this.text = text;
		this.scenarios = [];
	}
	getFeatureName(): string {
		const lines = getLinesContainsWord(this.text, "Feature:");
		if (lines.length <= 0) {
			throw new Error("Feature name not found");
		}
		if (lines.length > 1) {
			throw new Error("Not allow more than one feature name");
		}
		return lines[0].replace("Feature:", "").trim();
	}
}
class Scenario {
	private steps: Step[];
	constructor(text: string) {
		this.steps = [];
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
