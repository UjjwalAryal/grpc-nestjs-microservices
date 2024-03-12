import { Test, TestingModule } from '@nestjs/testing';
import { GrpcServiceOrdersController } from './grpc-service-orders.controller';
import { GrpcServiceOrdersService } from './grpc-service-orders.service';

describe('GrpcServiceOrdersController', () => {
  let grpcServiceOrdersController: GrpcServiceOrdersController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GrpcServiceOrdersController],
      providers: [GrpcServiceOrdersService],
    }).compile();

    grpcServiceOrdersController = app.get<GrpcServiceOrdersController>(GrpcServiceOrdersController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(grpcServiceOrdersController.getHello()).toBe('Hello World!');
    });
  });
});
