import { Controller, Get, Ip, Query, UseFilters, UseGuards, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { TimeInterceptor } from './time.interceptor';
import { ValidatePipe } from './validate/validate.pipe';
import { TestFilter } from './test.filter';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Ip() ip): string {
    console.log('AppController constructor', ip);
    return this.appService.getHello();
  }

  @Get('aaa')
  @UseFilters(TestFilter)
  getHello2(@Query('num', ValidatePipe) query): string {
    console.log('router', query);
    return this.appService.getHello();
  }
}
