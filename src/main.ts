// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn', 'debug', 'verbose'],
  });
  app.setGlobalPrefix('api');
  const port = 3000;
  app.enableCors({
    origin: 'http://localhost:8081',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true, // Se você estiver usando cookies ou autenticação baseada em sessão
    allowedHeaders: 'Content-Type, Accept, Authorization',
  });
  await app.listen(port);

  // Exibir o IP e porta
  Logger.log(`🚀 Server running on: http://localhost:${port}`);
}
bootstrap();
