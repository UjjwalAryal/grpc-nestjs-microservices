import { NestFactory } from '@nestjs/core';
import { APIGatewayModule } from './api-gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(APIGatewayModule);
  await app.listen(7000);
}
bootstrap();
