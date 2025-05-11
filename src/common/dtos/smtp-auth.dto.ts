import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from "class-validator";

export class SmtpAuth {
  @ApiProperty({ example: 'usuario@mail.com' })
  @IsString()
  @IsNotEmpty()
  user: string;

  @ApiProperty({ example: 'claveSegura123', description: 'Contraseña o token de acceso SMTP' })
  @IsString()
  @IsNotEmpty()
  password: string;
}
