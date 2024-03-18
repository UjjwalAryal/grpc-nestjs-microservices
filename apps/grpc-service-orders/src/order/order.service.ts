import { CreateOrderDto, Order, Orders } from '@app/common';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { randomUUID } from 'crypto';

@Injectable()
export class OrderService implements OnModuleInit {
  private readonly orders: Order[] = [];

  onModuleInit() {
    this.orders.push({
      id: randomUUID(),
      name: 'Taoism',
      origin: 'China',
      userId: '05169c98-c4ca-48f0-909d-cd55fe0b548a',
    });
    this.orders.push({
      id: randomUUID(),
      name: 'Crime & Punishment',
      origin: 'Russia',
      userId: '84b6423a-5be2-4e4a-885a-28ba505521b6',
    });
    this.orders.push({
      id: randomUUID(),
      name: 'The Prophet',
      origin: 'Lebanon',
      userId: 'vf2rt435-5be2-4e4a-885a-28ba505mnas3',
    });
    this.orders.push({
      id: randomUUID(),
      name: 'Abstract Chintan: Pyaaj',
      origin: 'Nepal',
      userId: '56b6423a-2345-4e4a-885a-28ba505opvf5',
    });
  }

  create(createOrderDto: CreateOrderDto) {
    const newOrder: Order = {
      ...createOrderDto,
      id: randomUUID(),
    };
    this.orders.push(newOrder);
    return newOrder;
  }

  findAll(): Orders {
    return { orders: this.orders };
  }

  findOne(id: string) {
    return this.orders.find((order) => order.id === id);
  }

  findOneOrderByUserId(userId: string) {
    return this.orders.find((order) => order.userId === userId);
  }
}
