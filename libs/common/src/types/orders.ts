/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { Empty, PaginationDto } from "./users";

export interface UpdateOrderDto {
  id: string;
}

export interface FindOneOrderDto {
  id: string;
}

export interface Orders {
  orders: Order[];
}

export interface CreateOrderDto {
  name: string;
  age: number;
}

export interface Order {
  id: string;
  name: string;
  age: number;
}

export const ORDERS_PACKAGE_NAME = "orders";

export interface OrdersServiceClient {
  createOrder(request: CreateOrderDto): Observable<Order>;

  findAllOrders(request: Empty): Observable<Orders>;

  findOneOrder(request: FindOneOrderDto): Observable<Order>;

  updateOrder(request: UpdateOrderDto): Observable<Order>;

  removeOrder(request: FindOneOrderDto): Observable<Order>;

  queryOrders(request: Observable<PaginationDto>): Observable<Orders>;
}

export interface OrdersServiceController {
  createOrder(request: CreateOrderDto): Promise<Order> | Observable<Order> | Order;

  findAllOrders(request: Empty): Promise<Orders> | Observable<Orders> | Orders;

  findOneOrder(request: FindOneOrderDto): Promise<Order> | Observable<Order> | Order;

  updateOrder(request: UpdateOrderDto): Promise<Order> | Observable<Order> | Order;

  removeOrder(request: FindOneOrderDto): Promise<Order> | Observable<Order> | Order;

  queryOrders(request: Observable<PaginationDto>): Observable<Orders>;
}

export function OrdersServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["createOrder", "findAllOrders", "findOneOrder", "updateOrder", "removeOrder"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("OrdersService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = ["queryOrders"];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("OrdersService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const ORDERS_SERVICE_NAME = "OrdersService";
