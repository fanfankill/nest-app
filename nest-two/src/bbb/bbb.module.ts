import { Module } from '@nestjs/common';
import { BbbService } from './bbb.service';
import { BbbController } from './bbb.controller';
import { AaaService } from '../aaa/aaa.service';
import { AaaModule } from '../aaa/aaa.module';

@Module({
  controllers: [BbbController],
  providers: [BbbService],
  
})
export class BbbModule {}
