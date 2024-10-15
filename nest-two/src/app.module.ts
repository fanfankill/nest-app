import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BbbModule } from './bbb/bbb.module';
import { AaaModule } from './aaa/aaa.module';

@Module({
  imports: [BbbModule, AaaModule],
  controllers: [AppController],
  providers: [AppService],
  // exports: [AaaModule],
})
export class AppModule {}
