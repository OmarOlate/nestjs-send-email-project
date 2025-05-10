import { IsNotEmpty, IsString } from "class-validator";

export class SmtpAuth {
    @IsString()
    @IsNotEmpty()
    user: string;

    @IsString()
    @IsNotEmpty()
    pass: string;
}