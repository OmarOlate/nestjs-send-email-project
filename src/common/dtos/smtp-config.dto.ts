import { IsBoolean, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString } from "class-validator";
import { SmtpAuth } from "./smtp-auth.dto";

export class SmtpConfig{
    @IsString()
    @IsNotEmpty()
    host: string;

    @IsNotEmpty()
    @IsNumber()
    port: string;

    @IsOptional()
    @IsBoolean()
    secure: boolean;

    @IsObject()
    @IsNotEmpty()
    auth?: SmtpAuth;
}