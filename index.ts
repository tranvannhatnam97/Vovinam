import { Feature } from "src/bdd-analyzer/feature-analyzer";
import { readFile } from "src/utils/file";
const featureText = readFile("sample.feature");
const feature = new Feature(featureText);
// console.log(feature.getName());
const scenarios = feature.getScenarios();
for (const scenario of scenarios) {
	console.log(`${scenario.getText()}`);
}
// const step = scenarios[1].getSteps()[2];
// console.log(step.getText());
