import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { SendMassiveEmailUseCase } from "../application";
import { SendMassiveEmailRequestDto } from "./dtos";
import { ApiPathEnum } from "src/common";

@ApiTags(ApiPathEnum.EMAIL)
@Controller()
export class SendMassiveEmailController{
    
    constructor(
        private readonly sendMassiveEmailUseCase: SendMassiveEmailUseCase
    ){}

    @Post('send-massive')
    @HttpCode(200)
    @ApiOperation({description: 'Send massive email service'})
    async execute(
        @Body() input: SendMassiveEmailRequestDto,
    ){
        return this.sendMassiveEmailUseCase.execute(input);
    }
}
