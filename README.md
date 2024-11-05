Implementation of a Simple Logger Repository

all configuration on common/logger and app.module.ts
</br>

**Repository**
<p>step 1: create an abstract repository for Logger</p>
<p>step 2: create a implementers of LoggerRepository</p>
</br>

**Provider and Module**
<p>step 3: create and configure logger.provider for make dynamically instantiate of logger, according to the .env variable</p>
<p>step 4: create a logger.module to make it a global instance</p>
</br>

**Environment configuration**
<p>step 5: create a .env file and set the variable LOGGER_TYPE=file</p>
</br>

**Implementation**
<p>step 6: import LoggerModule in app.module for use the global instance</p>
<p>step 7: test in app.controller or app.service</p>

</br>

**Extra steps**
<p>For use the .env variables, need to install:</p>
<p>npm i --save @nestjs/config</p>
<p>And configure ConfigModule.forRoot() on imports to app.module</p>

</br>
**Run**
<p>npm install</p>
<p>npm run start:dev</p>
