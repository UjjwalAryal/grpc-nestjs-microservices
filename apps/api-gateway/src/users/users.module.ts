import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { GRPC_SERVICE_ORDERS, GRPC_SERVICE_USERS } from './constant';
import { ORDERS_PACKAGE_NAME, USERS_PACKAGE_NAME } from '@app/common';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: GRPC_SERVICE_USERS,
        transport: Transport.GRPC,
        options: {
          package: USERS_PACKAGE_NAME,
          protoPath: join(
            __dirname,
            '../../../libs/common/src/proto/users.proto',
          ),
        },
      },
      {
        name: GRPC_SERVICE_ORDERS,
        transport: Transport.GRPC,
        options: {
          package: ORDERS_PACKAGE_NAME,
          protoPath: join(
            __dirname,
            '../../../libs/common/src/proto/orders.proto',
          ),
        },
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
