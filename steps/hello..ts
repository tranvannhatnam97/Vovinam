// hello.ts
import { Given, When, Then } from "cucumber"
import { sayHello, sayGoodbye } from '../src/hello';
Given("I have a greeting", () => {
  console.log("\nHello app");
});

When("I say hello", () => {
  sayHello();
});

Then("I should say goodbye", () => {
  sayGoodbye();
});
