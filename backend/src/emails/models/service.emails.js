import { emailTemplate } from "../template.emails.js";

export const serviceExpirationReminderEmail = (data) => {
	const body = `
    <div class="content">
      <h2>¡Recordatorio de Mantenimiento!</h2>  
  
      <p>Estimado/a <strong>${data.name}</strong>,</p>
  
      <p>Queremos recordarle que el servicio <strong>${data.service_name}</strong> de su vehículo <strong>${data.car_brand} ${data.car_model}</strong> (Patente: <strong>${data.car_license_plate}</strong>) está próximo a vencer.</p>
  
      <p>Para garantizar el óptimo funcionamiento de su vehículo y evitar inconvenientes, le recomendamos programar su mantenimiento a la brevedad.</p>
  
      <p>Si ya ha realizado el servicio, por favor ignore este mensaje.</p>
  
      <p>Atentamente,</p>
  
      <p>El equipo de Tekkar</p>
    </div>
  `;

	return emailTemplate(body);
};