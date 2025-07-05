import { Module } from "@nestjs/common";
import { SendMassiveEmailController } from "./send-massive-email.controller";
import { BullModule } from "@nestjs/bull";
import { envs } from "src/config";
import { SEND_MASSIVE_EMAIL_SERVICE, SendMassiveEmailUseCase } from "../application";
import { SendMassiveEmailApiService } from "./send-massive-email-api.service";

@Module({
    controllers: [SendMassiveEmailController],
    imports: [
        BullModule.forRoot({
            redis: {
                host: envs.REDIS_HOST,
                port: envs.REDIS_PORT,
                password: envs.REDIS_PASSWORD || undefined,
            }
        }),
        BullModule.registerQueue({
            name: 'email-queue',
        })
    ],
    providers: [
        SendMassiveEmailUseCase,
        {
            provide: SEND_MASSIVE_EMAIL_SERVICE,
            useClass: SendMassiveEmailApiService,
        }
    ]
})
export class SendMassiveEmailModule {}