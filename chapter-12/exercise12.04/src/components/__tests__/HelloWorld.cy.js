// import cy from "cypress";
// const { describe, it } = cy;
import HelloWorld from "../HelloWorld.vue";

describe("HelloWorld", () => {
  it("playground", () => {
    cy.mount(HelloWorld, { props: { msg: "Hello Cypress" } });
  });

  it("renders properly", () => {
    cy.mount(HelloWorld, { props: { msg: "Hello Cypress" } });
    cy.get("h1").should("contain", "Hello Cypress");
  });
});
