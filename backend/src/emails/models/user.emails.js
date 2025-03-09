import { emailTemplate } from "../template.emails.js";

export const passwordRecoveryEmail = (data) => {
  const body = `
    <div class="content">
      <p>Estimado/a <strong>${data.name}</strong>,</p>

      <p>
        Hemos recibido una solicitud para restablecer la contraseña de tu cuenta.
        Si no has realizado esta solicitud, por favor ignora este correo electrónico 
        y tu contraseña permanecerá sin cambios.
      </p>

      <p>
        Si has solicitado restablecer tu contraseña, por favor sigue el siguiente 
        enlace para crear una nueva contraseña:
      </p>

      <a class="button" href="${data.href}">
        Restablecer contraseña
      </a>

      <p>
        Una vez que hagas clic en el enlace, serás dirigido/a a una página donde podrás 
        ingresar una nueva contraseña para tu cuenta. Asegúrate de elegir una contraseña 
        segura y de recordarla para futuros accesos.
      </p>

      <p>
        Si tienes alguna pregunta o necesitas asistencia adicional, no dudes en 
        contactarnos respondiendo a este correo electrónico.
      </p>
  
      <p>Atentamente,</p>
  
      <p>El equipo de Tekkar</p>
    </div>
  `;

  return emailTemplate(body);
};