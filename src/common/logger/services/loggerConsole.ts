import { Injectable } from '@nestjs/common';
import LoggerRepository from './loggerRepository';

@Injectable()
class LoggerConsole extends LoggerRepository {
  log(message: string): void {
    console.log(message);
  }

  warning(message: string): void {
    console.warn(message);
  }

  error(error: Error, message: string): void {
    console.error(error, message);
  }
}

export default LoggerConsole;
