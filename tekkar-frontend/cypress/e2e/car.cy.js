describe("car flow", () => {
  it("should allow the user to manage car", () => {
    cy.visit("/login");

    //? complete the login form with valid credentials and submit it.
    cy.get("input[name='email']").type("nicolas.m.giudice@gmail.com");
    cy.get("input[name='password']").type("Pass1234");
    cy.get("button[type='submit']").click();

    //? navigate to the car creation page.
    cy.contains('button', 'Nuevo').click();
    cy.wait(500);

    //? fill in the car creation form with required details.
    cy.get("input[name='brand']").type("Volkswagen");
    cy.get("input[name='model']").type("Fox");
    cy.get("input[name='license_plate']").type("KZH614");
    cy.get("input[name='production_year']").type("2012");
    cy.get("input[name='owner_name']").type("Nicolás Giudice");
    cy.get("input[name='owner_doc_number']").type("12345678");
    cy.get("input[name='owner_phone']").type("+5491112345678");

    //? submit the car creation form.
    cy.get("button[type='submit']").click();
    cy.wait(500);

    //? verify that the new car is successfully created and displayed.
    cy.contains("KZH614").should("be.visible");

    //? navigate to the car list page to confirm the new car is listed.
    cy.visit("/cars");
    cy.contains("KZH614").should("be.visible");

    //? open the newly created car's details by clicking on it.
    cy.contains("KZH614").click();
    cy.wait(500);

    //? edit the car details by updating the model.
    cy.get('.fa-pencil').click();
    cy.get("input[name='model']").clear();
    cy.get("input[name='model']").type("Golf");
    cy.get("button[type='submit']").click();

    //? verify that the updated car details are reflected in the car list.
    cy.contains("Golf").should("be.visible");
  });
});