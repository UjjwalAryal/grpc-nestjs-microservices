import { Controller, Get } from '@nestjs/common';
import { GrpcGatewayService } from './grpc-gateway.service';

@Controller()
export class GrpcGatewayController {
  constructor(private readonly grpcGatewayService: GrpcGatewayService) {}

  @Get()
  getHello(): string {
    return this.grpcGatewayService.getHello();
  }
}
