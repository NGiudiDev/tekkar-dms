import { emailTemplate } from "../template.emails.js";

//TODO: mejorar el diseño del email.
export const serviceExpirationReminderEmail = (data) => {
	const body = `
    <h2>¡Recordatorio de Mantenimiento!</h2>  

    <p>Estimado/a <strong>${data.name}</strong>,</p>

    <p>Le informamos que el servicio <strong>${data.service_name}</strong> de su vehículo <strong>${data.car_brand} ${data.car_model}</strong> (Patente: <strong>${data.car_license_plate}</strong>) está próximo a vencer.</p>
        
    <p>Para evitar inconvenientes, le recomendamos programar su mantenimiento lo antes posible.</p>

    <p>Atentamente,</p>

    <p>El equipo de Tekkar</p>
  `;

	return emailTemplate(body);
};