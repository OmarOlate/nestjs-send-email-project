import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { EmailModule } from '../email/email.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    EmailModule
  ],
  //TODO: add cron service if is required
  providers: []
})
export class CronModule {}