describe("service flow", () => {
  it("should allow the user to manage service", () => {
    cy.visit("/login");

    //? complete the login form with valid credentials and submit it.
    cy.get("input[name='email']").type("nicolas.m.giudice@gmail.com");
    cy.get("input[name='password']").type("Pass1234");
    cy.get("button[type='submit']").click();
    cy.wait(500);

    //? open car's details by clicking on it.
    cy.contains("KZH614").click();
    cy.wait(500);

    //? navigate to the service creation page.
    cy.get('.fa-ellipsis').click();
    cy.contains('button', 'Crear servicio').click();

    //? fill in the service creation form with required details.
    cy.get("input[name='title']").type("Cambio de aceite");
    cy.get("input[name='performed_at']").type("02/01/2024");
    cy.get("input[name='service_mileage']").type("10000");
    cy.get("input[name='next_service_mileage']").type("20000");
    cy.get("input[name='price']").type("120000");
    cy.get("input[name='service_duration']").type("12");
    cy.get("textarea[name='description']").type("Realizamos el cambio de aceite y filtro para los 10,000 km utilizando lubricantes de alta calidad y siguiendo las especificaciones de tu vehículo, complementado con una inspección rápida de niveles de líquidos, batería y elementos de seguridad, asegurando el óptimo rendimiento y cuidado de tu motor.");
    
    //? submit the service creation form.
    cy.get("button[type='submit']").click();
    cy.wait(500);

    //? verify that the new service is successfully created and displayed.
    cy.contains("Cambio de aceite").should("be.visible");

    //? navigate to the service list page to confirm the new service is listed.
    cy.visit("/services");
    cy.contains("Cambio de aceite").should("be.visible");

    //? open the newly created service's details by clicking on it.
    cy.contains("Cambio de aceite").click();
    cy.wait(500);

    //? edit the service details by updating the model.
    cy.get('.fa-pencil').click();
    cy.get("input[name='price']").clear();
    cy.get("input[name='price']").type("100000");
    cy.get("button[type='submit']").click();

    //? verify that the updated car details are reflected in the car list.
    cy.contains("100000").should("be.visible");
  });
});