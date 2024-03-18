/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { Empty } from "./base";

export interface FindOneOrderDto {
  id: string;
}

export interface FindOneOrderByUserIdDto {
  userId: string;
}

export interface Orders {
  orders: Order[];
}

export interface CreateOrderDto {
  name: string;
  origin: string;
  userId: number;
}

export interface Order {
  id: string;
  name: string;
  origin: string;
  userId: string;
}

export const ORDERS_PACKAGE_NAME = "orders";

export interface OrdersServiceClient {
  createOrder(request: CreateOrderDto): Observable<Order>;

  findAllOrders(request: Empty): Observable<Orders>;

  findOneOrder(request: FindOneOrderDto): Observable<Order>;

  findOneOrderByUserId(request: FindOneOrderByUserIdDto): Observable<Order>;
}

export interface OrdersServiceController {
  createOrder(request: CreateOrderDto): Promise<Order> | Observable<Order> | Order;

  findAllOrders(request: Empty): Promise<Orders> | Observable<Orders> | Orders;

  findOneOrder(request: FindOneOrderDto): Promise<Order> | Observable<Order> | Order;

  findOneOrderByUserId(request: FindOneOrderByUserIdDto): Promise<Order> | Observable<Order> | Order;
}

export function OrdersServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["createOrder", "findAllOrders", "findOneOrder", "findOneOrderByUserId"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("OrdersService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("OrdersService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const ORDERS_SERVICE_NAME = "OrdersService";
