import { Test, TestingModule } from '@nestjs/testing';
import { GrpcGatewayController } from './grpc-gateway.controller';
import { GrpcGatewayService } from './grpc-gateway.service';

describe('GrpcGatewayController', () => {
  let grpcGatewayController: GrpcGatewayController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GrpcGatewayController],
      providers: [GrpcGatewayService],
    }).compile();

    grpcGatewayController = app.get<GrpcGatewayController>(GrpcGatewayController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(grpcGatewayController.getHello()).toBe('Hello World!');
    });
  });
});
