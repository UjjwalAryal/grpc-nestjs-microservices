import { NestFactory } from '@nestjs/core';
import { GrpcServiceOrdersModule } from './grpc-service-orders.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { USERS_PACKAGE_NAME } from '@app/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    GrpcServiceOrdersModule,
    {
      transport: Transport.GRPC,
      options: {
        package: USERS_PACKAGE_NAME,
        protoPath: join(
          __dirname,
          '../../../libs/common/src/proto/orders.proto',
        ),
      },
    },
  );

  await app.listen();
}
bootstrap();
