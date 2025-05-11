import { IsNotEmpty, IsObject, ValidateNested } from "class-validator";
import { MailOptionsDto } from "./mail-options.dto";
import { SmtpConfig } from "./smtp-config.dto";
import { Type } from "class-transformer";

export class SendEmailDto {
    @IsObject()
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => MailOptionsDto)
    mailOptions: MailOptionsDto;

    @IsObject()
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => SmtpConfig)
    smtpConfig: SmtpConfig;
}