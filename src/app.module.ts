import { Module } from '@nestjs/common';
import { EmailModule } from './modules';
import { CronModule } from './modules/cron/cron.module';

@Module({
  imports: [EmailModule, CronModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
