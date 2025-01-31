import { errorMessages } from "../../src/components/Register";

describe('Register Page', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:5173/');
  });
  describe('Error Messages', () => {
  it('name input throws error for 2 chars', () => {
    //cy.visit('http://localhost:5173/');

    cy.get('[data-cy="ad-input"]').type("em");

    cy.contains(errorMessages.ad);
  });
  it('Surname input throws error for 2 chars', () => {
    //cy.visit('http://localhost:5173/');

    cy.get('[data-cy="soyad-input"]').type("şa");

    cy.contains(errorMessages.soyad);
  });
  it('Email input throws error for emre@wit.', () => {
    //cy.visit('http://localhost:5173/');

    cy.get('[data-cy="email-input"]').type("emre@wit.");

    cy.contains(errorMessages.email);
  });
  it('Password input throws error for 1234  ', () => {
    //cy.visit('http://localhost:5173/');

    cy.get('[data-cy="password-input"]').type("1234.");

    cy.contains(errorMessages.password);
  });
  it('button is disabled for unvalidated inputs ', () => {
    //cy.visit('http://localhost:5173/');

    cy.get('[data-cy="submit-button"]').should("be.disabled");

  });
});
describe('Form inputs validated ', () => {
  it('button enabled for validated inputs', () => {
    //cy.visit('http://localhost:5173/');

    cy.get('[data-cy="ad-input"]').type("elif");
    cy.get('[data-cy="soyad-input"]').type("gündoğan");
    cy.get('[data-cy="email-input"]').type("elif@wit.com.tr");
    cy.get('[data-cy="password-input"]').type("1234Aa**");

    cy.get('[data-cy="submit-button"]').should("not.be.disabled");
  });
});
});