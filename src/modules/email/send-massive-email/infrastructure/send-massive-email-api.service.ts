import { Injectable } from "@nestjs/common";
import { SendMassiveEmailService } from "../application";
import { InjectQueue } from "@nestjs/bull";
import { Queue } from "bull";
import { envs } from "src/config";
import { SendMassiveEmailRequestDto } from "./dtos";

@Injectable()
export class SendMassiveEmailApiService implements SendMassiveEmailService{

    constructor(
        @InjectQueue('email-queue')
        private readonly emailQueue: Queue,
    ){}

    async execute(input: SendMassiveEmailRequestDto): Promise<void> {

        try{
            await this.emailQueue.add('send-email', {
                smtpConfig: {
                    host: envs.SMTP_HOST,
                    port: envs.SMTP_PORT,
                    secure: true,
                    auth: {
                      user: envs.SMPT_AUTH_USER,
                      password: envs.SMPT_AUTH_PASSWORD
                    }
                   },
                   mailOptions: input 
            },
            {
                attempts: 3,
                backoff: {
                    type: '',
                    delay: 5000,
                }
            });
        }catch(error){
            throw new Error(`Error in send massive email service: ${error}`);
        }
    }
}