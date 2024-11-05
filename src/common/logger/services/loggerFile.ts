import * as fs from 'fs';
import LoggerRepository from './loggerRepository';
import { Injectable } from '@nestjs/common';

@Injectable()
class LoggerFile extends LoggerRepository {
  log(message: string): void {
    const file_name = 'log.txt';
    this.verifyExistsFile(file_name);
    fs.appendFileSync(file_name, message + '\n');
  }

  warning(message: string): void {
    const file_name = 'log_warning.txt';
    this.verifyExistsFile(file_name);
    fs.appendFileSync(file_name, message + '\n');
  }

  error(error: Error, message: string): void {
    const file_name = 'log_errors.txt';
    this.verifyExistsFile(file_name);
    fs.appendFileSync(file_name, error.message + '\n' + message + '\n');
  }

  verifyExistsFile(fileName: string): void {
    if (!fs.existsSync(fileName)) {
      fs.writeFileSync(fileName, '');
    }
  }
}

export default LoggerFile;
