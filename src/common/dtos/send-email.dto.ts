import { IsNotEmpty, IsObject, ValidateNested } from "class-validator";
import { MailOptionsDto } from "./mail-options.dto";
import { SmtpConfig } from "./smtp-config.dto";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class SendEmailDto {
    @ApiProperty({ type: MailOptionsDto })
    @IsObject()
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => MailOptionsDto)
    mailOptions: MailOptionsDto;

    @ApiProperty({ type: SmtpConfig })
    @IsObject()
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => SmtpConfig)
    smtpConfig: SmtpConfig;
}