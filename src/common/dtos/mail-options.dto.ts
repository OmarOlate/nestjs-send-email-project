import { IsArray, IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class MailOptionsDto {
    @IsString()
    @IsNotEmpty()
    from: string;

    @IsEmail()
    @IsArray()
    to: string;

    @IsString()
    @IsNotEmpty()
    subject: string;

    @IsString()
    @IsNotEmpty()
    html: string;

    @IsString()
    @IsOptional()
    text?: string;
}