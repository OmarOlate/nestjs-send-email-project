import { Inject, Injectable } from "@nestjs/common";
import { SEND_MASSIVE_EMAIL_SERVICE, SendMassiveEmailService } from "./ports";
import { SendMassiveEmailInputDto } from "../domain";

@Injectable()
export class SendMassiveEmailUseCase {
    constructor(
        @Inject(SEND_MASSIVE_EMAIL_SERVICE)
        private readonly sendMassiveEMail: SendMassiveEmailService
    ){}

    async execute(input: SendMassiveEmailInputDto){

        await this.sendMassiveEMail.execute(input);
    }
}