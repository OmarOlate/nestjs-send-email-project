import { Process, Processor } from "@nestjs/bull";
import { Job } from "bull";
import { SendEmailDto } from "src/common";
import { createTransport } from "src/config/nodemailer";
import * as sanitizeHtml from 'sanitize-html';

@Processor('email-queue')
export class EmailProcessor{ 
    @Process('send-email')
    async handleSendEmail(job: Job<SendEmailDto>){
        const {smtpConfig, mailOptions} = job.data;

        let sanitizedHtml = sanitizeHtml(mailOptions.html); 

        const transporter = createTransport(smtpConfig);

        try{
            await transporter.sendMail({
                ...mailOptions,
                html: sanitizedHtml,
            });
        }catch(error){
            throw new Error(`Error to send email from processor: ${String(error)}`);
        }
    }
}