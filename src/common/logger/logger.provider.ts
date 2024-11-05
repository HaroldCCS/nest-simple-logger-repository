// src/common/logger/logger.provider.ts
import { Provider } from '@nestjs/common';
import LoggerRepository from './services/loggerRepository';
import LoggerConsole from './services/loggerConsole';
import LoggerFile from './services/loggerFile';

export const loggerProvider: Provider = {
  provide: LoggerRepository,
  useFactory: () => {
    const loggerType = process.env.LOGGER_TYPE;

    if (loggerType === 'file') {
      return new LoggerFile();
    }
    return new LoggerConsole();
  },
};
