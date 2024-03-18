import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { GrpcServiceUsersModule } from './grpc-service-users.module';
import { join } from 'path';
import { GRPC_SERVICE_USERS_PACKAGE } from '@app/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    GrpcServiceUsersModule,
    {
      transport: Transport.GRPC,
      options: {
        package: GRPC_SERVICE_USERS_PACKAGE,
        protoPath: join(__dirname, '../../libs/common/src/proto/users.proto'),
      },
    },
  );

  await app.listen();
}
bootstrap();
