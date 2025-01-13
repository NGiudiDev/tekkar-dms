describe("user flow", () => {
  it("should allow the user to manage service", () => {
    cy.visit("/login");

    //? complete the login form with valid credentials and submit it.
    cy.get("input[name='email']").type("nicolas.m.giudice@gmail.com");
    cy.get("input[name='password']").type("Pass1234");
    cy.get("button[type='submit']").click();
    cy.wait(500);

    //? navigate to the users list page.
    cy.contains("Usuarios").click();
    cy.wait(500);

    //? navigate to the user creation page.
    cy.contains("Nuevo").click();
    cy.wait(500);

    //? fill in the user creation form with required details.
    cy.get("input[name='name']").type("Prueba");
    cy.get("input[name='email']").type("test@gmail.com");
    cy.get("input[name='doc_number']").type("12345678");
    cy.get("input[name='phone']").type("+5491112345678");
    cy.get("input[name='password']").type("Pass1234");
 
    //? submit the service creation form.
    cy.get("button[type='submit']").click();
    cy.wait(500);

    //? verify that the new user is successfully created and displayed.
    cy.contains("test@gmail.com").should("be.visible");

    //? open the newly created user's details by clicking on it.
    cy.contains("test@gmail.com").click();
    cy.wait(500);

    //? edit the user details by updating the model.
    cy.get('.fa-pencil').click();
    cy.get("input[name='name']").clear();
    cy.get("input[name='name']").type("Prueba Final");
    cy.get("button[type='submit']").click();

    //? verify that the updated user details are reflected in the user list.
    cy.contains("Prueba Final").should("be.visible");
  });
});