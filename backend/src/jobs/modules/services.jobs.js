import { serviceModel } from "../../app/models/service.model.js";

export const serviceExpirationReminderJob = async () => {
  try {
    const expiredServices = await serviceModel.getExpiredServices();
    
    expiredServices.forEach((expiredService) => {
      const expiredServiceObj = expiredService.toJSON();

      const email = expiredServiceObj.car.owner_email;
      const serviceName = expiredService.title;

      //TODO: enviar un correo al mail del auto.
      console.log(email, serviceName);
    });
  } catch (err) {
    console.log(err);
  }
}