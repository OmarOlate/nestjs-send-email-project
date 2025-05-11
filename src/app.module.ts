import { Module } from '@nestjs/common';
import { EmailModule } from './modules';

@Module({
  imports: [EmailModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
