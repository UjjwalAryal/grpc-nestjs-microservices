import { Controller, Get } from '@nestjs/common';
import { GrpcServiceOrdersService } from './grpc-service-orders.service';

@Controller()
export class GrpcServiceOrdersController {
  constructor(private readonly grpcServiceOrdersService: GrpcServiceOrdersService) {}

  @Get()
  getHello(): string {
    return this.grpcServiceOrdersService.getHello();
  }
}
