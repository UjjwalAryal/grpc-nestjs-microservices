import { Module } from '@nestjs/common';
import { GrpcServiceOrdersController } from './grpc-service-orders.controller';
import { GrpcServiceOrdersService } from './grpc-service-orders.service';

@Module({
  imports: [],
  controllers: [GrpcServiceOrdersController],
  providers: [GrpcServiceOrdersService],
})
export class GrpcServiceOrdersModule {}
