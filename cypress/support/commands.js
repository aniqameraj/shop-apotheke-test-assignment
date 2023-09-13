// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("getMenuBarCart", () => {
    return cy.get('[data-clientside-hook="Menubar__cart-link"]');
  });
  Cypress.Commands.add("getCartBadgeQuantity", () => {
    return cy.get('[data-clientside-hook="Menubar__cart-badge"]');
  });
  Cypress.Commands.add("addToCart", () => {
    cy.get('[data-qa-id="add-to-cart-button"]').click();
  });
  Cypress.Commands.add("getCartTableTotalPrice", () => {
    return cy.get('[data-qa-id="cart-entry-totalPrice"]');
  });
  Cypress.Commands.add("getCartTableSelectedItemQuantity", () => {
    return cy.get('[data-clientside-hook="select-selected-item"]');
  });
  Cypress.Commands.add("getCartTableProductInfo", () => {
    return cy.get('[data-qa-id="cart-entry-productInfo"]');
  });