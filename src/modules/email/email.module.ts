import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';
import { BullModule } from '@nestjs/bull';
import { envs } from 'src/config';
import { EmailProcessor } from './emai.processor';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: envs.REDIS_HOST,
        port:  envs.REDIS_PORT,
        password: envs.REDIS_PASSWORD || undefined,
      }
    }),
    BullModule.registerQueue({
      name: 'email-queue',
    })
  ],
  providers: [EmailService, EmailProcessor],
  controllers: [EmailController]
})
export class EmailModule {}
