import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString } from "class-validator";
import { SmtpAuth } from "./smtp-auth.dto";

export class SmtpConfig {
  @ApiProperty({ example: 'smtp.mail.com' })
  @IsString()
  @IsNotEmpty()
  host: string;

  @ApiProperty({ example: 999 })
  @IsNotEmpty()
  @IsNumber()
  port: number;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  secure: boolean;

  @ApiProperty({ type: SmtpAuth })
  @IsObject()
  @IsNotEmpty()
  auth?: SmtpAuth;
}
