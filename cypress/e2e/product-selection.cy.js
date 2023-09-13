describe("Product Quantity Selection Test Suite", () => {
  const selectQuantity = "3";
  let currentProductPrice = 0;
  const selectedProductInfo = "Packungsgröße: 20 St | Tabletten";
  const selectedProductName = "Paracetamol-ratiopharm® 500 mg";
  beforeEach(() => {
    cy.visit("https://www.shop-apotheke.com/arzneimittel/1126111/paracetamol-ratiopharm-500-mg.htm");

    // Arrange
    cy.get("#quantity").click();
    cy.get('[data-qa-id="product-quantity-select-option"]').contains(selectQuantity).click();
    cy.get('[data-qa-id="currentOfferPrice"]').invoke("text").then(innerText => currentProductPrice = Number(innerText.substring(2).replace(",", ".")) * Number(selectQuantity));
  });
  it("Quantity dropdown should have correct selected quantity.", () => {
    // Assert
    cy.get("#quantity").should("have.text", selectQuantity);
  });
  it("Menu bar cart badge should have correct selected quantity.", () => {
    // Act
    cy.addToCart();

    // Assert
    cy.getCartBadgeQuantity().should("contain", selectQuantity);
  });
  it("Cart table should display correct product and relevant product information.", () => {
    // Arrange
    cy.addToCart();

    // Act
    cy.getMenuBarCart().click();

    //Assert
    cy.getCartTableProductInfo().should("be.visible");
    cy.getCartTableProductInfo().children('[href="/products/01126111/paracetamol-ratiopharm-500-mg.htm"]').should("have.length", 1).should("have.text", selectedProductName);
    cy.getCartTableProductInfo().children().contains(selectedProductInfo);
    cy.getCartTableSelectedItemQuantity().should("have.text", selectQuantity);
    cy.getCartTableTotalPrice().should("have.text", `€ ${currentProductPrice}`.replace(".", ","));
  });
});

before(() => {
  cy.once("uncaught:exception", () => false);
  cy.visit("https://www.shop-apotheke.com/arzneimittel/1126111/paracetamol-ratiopharm-500-mg.htm");
});