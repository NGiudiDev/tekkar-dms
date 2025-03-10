# Dealer Management System

This system is designed for dealerships, distributors, automotive workshops, and anyone who needs to manage vehicles and related services.

As part of our value proposition, we have developed an **MVP (Minimum Viable Product)** focused on vehicle inventory management and tracking the services performed on each vehicle. Users can log in to the application to add vehicles to the system, record the services performed, and track related information. Additionally, from a public interface, users can consult vehicle data by searching using the personal document number or vehicle license plate.

Currently, the application is targeted at the Argentine market, but future plans include adapting the web application to multiple languages and countries to expand its reach.

## Entidades

- **Car**
- **Client**
- **Person**
- **Service**
- **User**

## Main Features

- **Car listing**: View all cars registered in the system.
- **Car creation**: Add new cars to the inventory.
- **Car editing**: Update the information of registered cars.
- **Client listing**: View all clients registered in the system.
- **Client creation**: Add new clients to the inventory.
- **Client editing**: Update the information of registered clients.
- **Service listing**: View all services performed on the vehicles.
- **Service creation**: Record new services performed on a vehicle.
- **Service editing**: Update the details of recorded services.
- **Service report**: Public view of a car's service history.
- **User listing**: View all users registered in the system.
- **User creation**: Add new users to the inventory.
- **User editing**: Update the information of registered users.
- **Vehicle listing**: View all vehicles registered in the system.
- **Vehicle creation**: Add new vehicles to the inventory.
- **Vehicle editing**: Update the information of registered vehicles.

## Pending Features

- **Manejo de fechas**: Ver como sincronizar las fechas del frontend con el de backend.

- **Integration with ELM327 device**: Communication with the ELM327 device connected to the vehicle’s OBD2 port to retrieve information such as mileage and determine if service is due based on mileage.

- **Email notifications**: Automatic email notifications when a scheduled service is approaching.

- **Vehicle deletion**: Allow the deletion of vehicles from the system, with automatic removal of associated services.

- **Service deletion**: Option to delete recorded services.

- **PDF service report generation**: Download a detailed report of services performed on a vehicle in PDF format.

- **User roles**: Assign roles to control access and permissions within the system.

- **Service order management**: Manage service orders related to vehicles.

- **Parts inventory management**: For workshops, manage the inventory of spare parts.

- **Customer management**: Manage customer data for those who have vehicles registered in the system.

- **Guardar datos del motor**: Holguras del motor u otros datos mecánicos.