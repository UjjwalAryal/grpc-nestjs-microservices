import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UsersService } from './users.service';
import {
  UsersServiceController,
  UpdateUserDto,
  CreateUserDto,
  UsersServiceControllerMethods,
  FindOneUserDto,
  PaginationDto,
  Users,
  User,
} from '@app/common';
import { Observable } from 'rxjs';

@Controller()
@UsersServiceControllerMethods()
export class UsersController implements UsersServiceController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern('createUser')
  createUser(createUserDto: CreateUserDto): User {
    return this.usersService.create(createUserDto);
  }

  @MessagePattern('findAllUsers')
  findAllUsers(): Users {
    return this.usersService.findAll();
  }

  @MessagePattern('findOneUser')
  findOneUser(findOneUserDto: FindOneUserDto): User {
    return this.usersService.findOne(findOneUserDto.id);
  }

  @MessagePattern('updateUser')
  updateUser(updateUserDto: UpdateUserDto) {
    return this.usersService.update(updateUserDto.id, updateUserDto);
  }

  @MessagePattern('removeUser')
  removeUser(findOneUserDto: FindOneUserDto) {
    return this.usersService.remove(findOneUserDto.id);
  }

  @MessagePattern('queryUsers')
  queryUsers(paginationDtoStream: Observable<PaginationDto>) {
    return this.usersService.queryUsers(paginationDtoStream);
  }
}
