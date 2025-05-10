import { IsNotEmpty, IsObject } from "class-validator";
import { MailOptionsDto } from "./mail-options.dto";
import { SmtpConfig } from "./smtp-config.dto";

export class SendEmailDto {
    @IsObject()
    @IsNotEmpty()
    mailOptions: MailOptionsDto;

    @IsObject()
    @IsNotEmpty()
    smtpConfig: SmtpConfig;
}