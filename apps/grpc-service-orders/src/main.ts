import { NestFactory } from '@nestjs/core';
import { GrpcServiceOrdersModule } from './grpc-service-orders.module';

async function bootstrap() {
  const app = await NestFactory.create(GrpcServiceOrdersModule);
  await app.listen(3000);
}
bootstrap();
