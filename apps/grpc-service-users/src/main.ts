import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { GrpcServiceUsersModule } from './grpc-service-users.module';
import { join } from 'path';
import { USERS_PACKAGE_NAME } from '@app/common/types';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    GrpcServiceUsersModule,
    {
      transport: Transport.GRPC,
      options: {
        package: USERS_PACKAGE_NAME,
        protoPath: join(
          __dirname,
          '../../libs/common/common/src/proto/users.proto',
        ),
      },
    },
  );

  await app.listen();
}
bootstrap();
