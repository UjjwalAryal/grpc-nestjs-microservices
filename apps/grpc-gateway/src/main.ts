import { NestFactory } from '@nestjs/core';
import { GrpcGatewayModule } from './grpc-gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(GrpcGatewayModule);
  await app.listen(7000);
}
bootstrap();
