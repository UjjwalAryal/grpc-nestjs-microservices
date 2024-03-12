import { Module } from '@nestjs/common';
import { GrpcGatewayController } from './grpc-gateway.controller';
import { GrpcGatewayService } from './grpc-gateway.service';

@Module({
  imports: [],
  controllers: [GrpcGatewayController],
  providers: [GrpcGatewayService],
})
export class GrpcGatewayModule {}
