import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { ApplicationModule } from './app.module';

const port = 3232;

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(ApplicationModule);
  Logger.log(`start service, port: ${port}`, 'bootstrap');
  await app.listen(port);
}

bootstrap().catch((e) => {
  console.error('service on error: ', e.message);
  process.exit(1);
});
