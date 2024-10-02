import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 3000;

  // Start the server
  await app.listen(port);

  // Obter o endereço e porta do servidor
  const server = await app.getHttpServer();
  const address =
    server.address().address === '::' ? 'localhost' : server.address().address;

  // Exibir o IP e porta
  Logger.log(`🚀 Server running on: http://${address}:${port}`);
}
bootstrap();
