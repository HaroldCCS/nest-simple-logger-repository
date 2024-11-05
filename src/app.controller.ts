import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import LoggerRepository from './common/logger/services/loggerRepository';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly logger: LoggerRepository,
  ) {}

  @Get()
  getHello(): string {
    this.logger.log('Controller Hello World!');
    return this.appService.getHello();
  }
}
