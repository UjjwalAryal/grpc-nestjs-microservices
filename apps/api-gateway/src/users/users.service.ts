import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import {
  CreateUserDto,
  ORDERS_SERVICE_NAME,
  OrdersServiceClient,
  PaginationDto,
  USERS_SERVICE_NAME,
  UpdateUserDto,
  UsersServiceClient,
} from '@app/common';
import { GRPC_SERVICE_ORDERS, GRPC_SERVICE_USERS } from './constant';
import { ClientGrpc } from '@nestjs/microservices';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class UsersService implements OnModuleInit {
  private usersService: UsersServiceClient;
  private ordersService: OrdersServiceClient;

  constructor(
    @Inject(GRPC_SERVICE_USERS) private clientUsers: ClientGrpc,
    @Inject(GRPC_SERVICE_ORDERS) private clientOrders: ClientGrpc,
  ) {}

  onModuleInit() {
    this.usersService =
      this.clientUsers.getService<UsersServiceClient>(USERS_SERVICE_NAME);

    this.ordersService =
      this.clientOrders.getService<OrdersServiceClient>(ORDERS_SERVICE_NAME);
  }

  create(createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  findAll() {
    return this.usersService.findAllUsers({});
  }

  findOne(id: string) {
    // this.ordersService.findOneOrderByUserId({ userId: id });
    return this.usersService.findOneUser({ id });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.usersService.updateUser(updateUserDto);
  }

  remove(id: string) {
    return this.usersService.removeUser({ id });
  }

  emailUsers() {
    const users$ = new ReplaySubject<PaginationDto>();

    users$.next({ page: 0, skip: 1 });
    users$.next({ page: 1, skip: 1 });
    users$.next({ page: 2, skip: 1 });

    users$.complete();

    let chunkNumber = 1;

    this.usersService.queryUsers(users$).subscribe((users) => {
      console.log('Chunk ', chunkNumber, users);
      chunkNumber += 1;
    });
  }
}
