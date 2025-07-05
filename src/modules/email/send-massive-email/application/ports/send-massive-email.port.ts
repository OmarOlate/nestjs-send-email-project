import { SendMassiveEmailInputDto } from "../../domain"

export type SendMassiveEmailService = {
    execute(input: SendMassiveEmailInputDto): Promise<void>
}

export const SEND_MASSIVE_EMAIL_SERVICE = Symbol('SendMassiveEmailService');