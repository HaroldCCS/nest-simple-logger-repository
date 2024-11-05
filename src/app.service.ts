import { Injectable } from '@nestjs/common';
import LoggerRepository from './common/logger/services/loggerRepository';

@Injectable()
export class AppService {
  constructor(private readonly logger: LoggerRepository) {}
  getHello(): string {
    this.logger.log('Service Hello World!');
    return 'Hello World!';
  }
}
