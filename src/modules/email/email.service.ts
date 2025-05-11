import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { SendEmailDto } from 'src/common';

@Injectable()
export class EmailService {

    constructor(
        @InjectQueue('email-queue')
        private readonly emailQueue: Queue,
    ){}

    async sendEmail(sendEmailDto: SendEmailDto){
        const {mailOptions, smtpConfig} = sendEmailDto;

        try{
            await this.emailQueue.add('send-email', {
               smtpConfig,
               mailOptions 
            },{
                attempts: 3,
                backoff: {
                    type: '',
                    delay: 5000,
                }
            });
        }catch(error){
            throw new Error(`Error in send email from service: ${error}`);
        }
    }
}
