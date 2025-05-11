import { Injectable, Logger } from '@nestjs/common';
import { EmailService } from '../email';
import { Cron, CronExpression } from '@nestjs/schedule';
import { SendEmailDto } from 'src/common';
import { envs } from 'src/config';

@Injectable()
export class CronService {
    private readonly logger = new Logger(CronService.name);
    constructor(
        private readonly emailService: EmailService,
    ){}

    @Cron(CronExpression.EVERY_MINUTE,{
        name: 'sendCronName' //add cron expression name
    })
    async handleEmail(){
        const email: SendEmailDto = {
            mailOptions: {
                from: "", // add email to test send email
                to: [], // add email to test send email
                subject: "Este es un correo de prueba",
                html: `<!DOCTYPE html>
                <html lang="es">
                  <head>
                    <meta charset="UTF-8" />
                    <title>Correo de prueba</title>
                  </head>
                  <body style="margin: 0; padding: 0; font-family: sans-serif; background-color: #f9fafb; color: #111827;">
                    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9fafb; padding: 40px 0;">
                      <tr>
                        <td align="center">
                          <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: white; border-radius: 0.5rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1); overflow: hidden;">
                            <!-- Header -->
                            <tr>
                              <td style="background-color: #1d4ed8; padding: 20px 30px; text-align: center; color: white;">
                                <h1 style="margin: 0; font-size: 24px;">Este es un correo de envío automático a las ${new Date().toLocaleTimeString()}.</h1>
                              </td>
                            </tr>
                            <!-- Body -->
                            <tr>
                              <td style="padding: 30px;">
                                <h2 style="margin-top: 0; font-size: 20px; color: #1f2937;">¡Hola!</h2>
                                <p style="font-size: 16px; line-height: 1.5;">
                                  Este es un correo electrónico de prueba para validar el diseño, estructura y estilo del mensaje. Si estás viendo esto correctamente, significa que todo está funcionando como se esperaba.
                                </p>
                                <p style="font-size: 16px; line-height: 1.5;">
                                  A continuación te dejamos un botón de ejemplo, útil para CTA (Call to Action).
                                </p>
                                <!-- Button -->
                                <p style="text-align: center; margin: 30px 0;">
                                  <a href="#" style="background-color: #3b82f6; color: white; text-decoration: none; padding: 12px 24px; border-radius: 0.375rem; display: inline-block; font-weight: bold;">
                                    Ver más
                                  </a>
                                </p>
                                <p style="font-size: 14px; color: #6b7280;">
                                  Si tienes dudas o comentarios, no dudes en responder este correo.
                                </p>
                              </td>
                            </tr>
                            <!-- Footer -->
                            <tr>
                              <td style="background-color: #f3f4f6; padding: 20px; text-align: center; font-size: 12px; color: #6b7280;">
                                © 2025 Tu Empresa. Todos los derechos reservados.
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </body>
                </html>
                `
              },
            smtpConfig: {
                host: envs.SMTP_HOST,
                port: envs.SMTP_PORT,
                secure: false,
                auth: {
                  user: envs.SMPT_AUTH_USER,
                  password: envs.SMPT_AUTH_PASSWORD
                }
              }
        }

        try{
            await this.emailService.sendEmail(email);
            this.logger.log({data: {message: `Successfully send email in ${new Date().toLocaleTimeString()}`}});
        }catch{
            this.logger.error({data: {message: `Error in send email in ${new Date().toLocaleTimeString()}`}});
        }
    }
}
