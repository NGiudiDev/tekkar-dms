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
          margin: 0px;
        }

        body {
          background-color: #f4f4f4;
          font-family: Arial, sans-serif;
          padding: 20px;
        }

        h2 {
          font-size: 20px;
          margin-bottom: 16px;
        }

        .button {
          background-color: #CE712A;
          border-radius: 4px;
          color: #FFFFFF;
          display: inline-block;
          font-size: 14px;
          margin-bottom: 24px;
          padding: 10px 20px;
          text-decoration: none;
        }

        .container {
          background-color: #FAFAFA;
          margin: 0 auto;
          max-width: 550px;
        }

        .content {
          font-size: 14px;
          padding: 16px;
        }

        .content > p {
          font-size: 14px;
          line-height: 20px;
          margin-bottom: 24px;
        }

        .footer > p {
          color: #666666;
          font-size: 12px;
          margin-bottom: 8px;
          text-align: center;
        }

        .footer-box {
          background-color: #A0A0A0;
          border-top-color: #CE712A;
          border-top-style: solid;
          border-top-width: 1px;
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
          height: 16px;
        }

        .header {
          background-color: #A0A0A0;
          border-bottom-color: #CE712A;
          border-bottom-style: solid;
          border-bottom-width: 1px;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
          height: 52px;
        }
      </style>
    </head>
    
    <body>
      <div class="container">
        <div class="header"></div>
        
        ${body}

        <div class="footer">
          <p>Este es un mensaje automático, por favor no responda.</p>
          <p>&copy; ${year} Tekkar. Todos los derechos reservados.</p>
          <div class="footer-box"></div>
        </div>
      </div>
    </body>
    
    </html> 
  `;
};