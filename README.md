Implementation of a Simple Logger Repository

all configuration on common/logger and app.module.ts

**Repository**
step 1: create an abstract repository for Logger
step 2: create a implementers of LoggerRepository

**Provider and Module**
step 3: create and configure logger.provider for make dynamically instantiate of logger, according to the .env variable
step 4: create a logger.module to make it a global instance

**Environment configuration**
step 5: create a .env file and set the variable LOGGER_TYPE=file

**Implementation**
step 6: import LoggerModule in app.module for use the global instance
step 7: test in app.controller or app.service


**Extra steps**
For use the .env variables, need to install:
npm i --save @nestjs/config

And configure ConfigModule.forRoot() on imports to app.module


**Run**
npm install
npm run start:dev
