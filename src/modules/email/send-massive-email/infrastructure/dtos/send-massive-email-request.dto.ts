import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SendMassiveEmailInputDto } from "../../domain";
import { IsArray, IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class SendMassiveEmailRequestDto implements SendMassiveEmailInputDto{
    @ApiProperty({ example: 'remitente@correo.com' })
    @IsString()
    @IsNotEmpty()
    from: string;

    @ApiProperty({ 
        example: ['destinatario1@correo.com', 'destinatario2@correo.com'],
        type: [String],
        description: 'Lista de correos electrónicos de destino'
    })
    @IsArray()
    @IsEmail({}, { each: true })
    to: string[];

    @ApiProperty({ 
        example: ['destinatario1@correo.com', 'destinatario2@correo.com'],
        type: [String],
        description: 'Lista de correos electrónicos de destino con copia oculta'
    })
    @IsArray()
    @IsEmail({}, { each: true })
    bcc?: string[]

    @ApiProperty({ example: 'Asunto del correo' })
    @IsString()
    @IsNotEmpty()
    subject: string;

    @ApiProperty({ example: '<p>Contenido HTML del correo</p>' })
    @IsString()
    @IsNotEmpty()
    html: string;

    @ApiPropertyOptional({ example: 'Texto plano del mensaje' })
    @IsString()
    @IsOptional()
    text?: string;
}