import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModule } from './common/logger/logger.module';

//LoggerModule use for global injection
@Module({
  imports: [ConfigModule.forRoot(), LoggerModule],
  controllers: [AppController],
  providers: [AppService],
})

//import { loggerProvider } from './common/logger/logger.provider';
//LoggerProvider use for specific injection
/*
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, loggerProvider],
})*/
export class AppModule {}
