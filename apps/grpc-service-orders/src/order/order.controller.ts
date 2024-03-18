import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { OrderService } from './order.service';
import {
  OrdersServiceController,
  CreateOrderDto,
  FindOneOrderDto,
  FindOneOrderByUserIdDto,
  OrdersServiceControllerMethods,
} from '@app/common';

@Controller()
@OrdersServiceControllerMethods()
export class OrderController implements OrdersServiceController {
  constructor(private readonly orderService: OrderService) {}

  @MessagePattern('createOrder')
  createOrder(createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto);
  }

  @MessagePattern('findAllOrders')
  findAllOrders() {
    return this.orderService.findAll();
  }

  @MessagePattern('findOneOrder')
  findOneOrder(findOneOrderDto: FindOneOrderDto) {
    return this.orderService.findOne(findOneOrderDto.id);
  }

  @MessagePattern('findOneOrderByUserId')
  findOneOrderByUserId(findOneOrderByUserIdDto: FindOneOrderByUserIdDto) {
    return this.orderService.findOneOrderByUserId(
      findOneOrderByUserIdDto.userId,
    );
  }
}
