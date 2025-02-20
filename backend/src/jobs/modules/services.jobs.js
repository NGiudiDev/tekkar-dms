import { emailService } from "../../app/services/email.service.js";

import { serviceModel } from "../../app/models/service.model.js";

import { serviceExpirationReminderEmail } from "../../emails/models/service.emails.js";

export const serviceExpirationReminderJob = async () => {
  try {
    const expiredServices = await serviceModel.getExpiredServices();
    
    expiredServices.forEach((expiredService) => {
      const expiredServiceObj = expiredService.toJSON();

      //? send service expiration reminder email.
      const mailOptions = {
        subject: "¡Recordatorio de Mantenimiento!",
        to: expiredServiceObj.car.owner_email,
        html: serviceExpirationReminderEmail({
          car_brand: expiredServiceObj.car.brand,
          car_license_plate: expiredServiceObj.car.license_plate,
          car_model: expiredServiceObj.car.model,
          name: expiredServiceObj.car.owner_name,
          service_name: expiredServiceObj.title,
        
        }),
      };
    
      emailService.send(mailOptions);
    });
  } catch (err) {
    console.log(err);
  }
}