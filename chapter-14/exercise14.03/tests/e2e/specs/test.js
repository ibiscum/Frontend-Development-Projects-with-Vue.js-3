import cy from "cypress";
cy.describe("Commentator Pro", () => {
  cy.it('Has a h2 with "Commentator Pro"', () => {
    cy.visit("/");
    cy.contains("h2", "Commentator Pro");
  });
});
