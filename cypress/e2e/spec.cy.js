/* eslint-disable no-undef */
describe('Prueba E2E de React App', () => {
  it('Carga la página principal y realiza una acción', () => {
    cy.visit('http://localhost:3000');
    cy.intercept("https://fakestoreapi.com/products").as('loadItems')
    cy.wait('@loadItems')
    cy.wait(3000)

    cy.get('div[class="allLess"]').find('button').click()
    cy.wait(3000)

    cy.get('div[class="categoryButtons"]').find('button:first-child').click()
    cy.wait(3000)

    cy.get('div[class="itemsList"]').find('div:nth-child(1) a').as('linkDescribeItem')
    cy.get('@linkDescribeItem').click()
    cy.wait(3000)

    cy.get('div[class="infoContainer"]').find('button').click()
    cy.wait(3000)
    cy.get('span[class="homeIcon"]').click()
    cy.wait('@loadItems')
    cy.wait(3000)

    cy.get('div[class="itemsList"]').find('div:nth-child(2) a').as('linkDescribeItem')
    cy.get('@linkDescribeItem').click()
    cy.wait(3000)

    cy.get('div[class="infoContainer"]').find('button').click()
    cy.wait(3000)
    cy.get('span[class="cartIcon"]').click()
    cy.wait('@loadItems')
    cy.wait(3000)

    cy.get('div[class="products"]').find('div:nth-child(1) button').click()
    cy.wait(3000)
    cy.get('span[class="homeIcon"]').click()
    cy.wait('@loadItems')
  });
});
