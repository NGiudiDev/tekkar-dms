import { getYear } from "../app/utils/dates.js";

export const emailTemplate = (body) => {
  const year = getYear();

	return `
    <!DOCTYPE html>

    <html lang="es">
    
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
      <style>
        * {
          box-sizing: border-box;
        }

        body {
          background-color: #f4f4f4;
          font-family: Arial, sans-serif;
          padding: 20px;
        }

        .button {
          background-color: #CE712A;
          border-radius: 4px;
          color: #FFFFFF;
          display: inline-block;
          font-size: 14px;
          padding: 10px 20px;
          text-decoration: none;
        }

        .container {
          margin: 0 auto;
          max-width: 600px;
        }

        .content {
          font-size: 14px;
        }

        .footer {
          color: #666666;
          font-size: 12px;
          padding-top: 20px;
          text-align: center;
        }
      </style>
    </head>
    
    <body>
      <div class="container">
        ${body}

        <div class="footer">
          <p>Este es un mensaje automático, por favor no responda.</p>
          <p>&copy; ${year} Tekkar. Todos los derechos reservados.</p>
        </div>
      </div>
    </body>
    
    </html> 
  `;
};