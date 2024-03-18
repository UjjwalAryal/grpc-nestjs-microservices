import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import {
  CreateUserDto,
  PaginationDto,
  UpdateUserDto,
  User,
  Users,
} from '@app/common';
import { randomUUID } from 'crypto';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class UsersService implements OnModuleInit {
  private readonly users: User[] = [];

  onModuleInit() {
    this.users.push({
      id: '05169c98-c4ca-48f0-909d-cd55fe0b548a',
      name: 'Tao',
      age: 25,
    });
    this.users.push({
      id: '84b6423a-5be2-4e4a-885a-28ba505521b6',
      name: 'Dostoevsky',
      age: 24,
    });
    this.users.push({
      id: 'vf2rt435-5be2-4e4a-885a-28ba505mnas3',
      name: 'Gibran',
      age: 56,
    });
    this.users.push({
      id: '56b6423a-2345-4e4a-885a-28ba505opvf5',
      name: 'Sankar Lamichhane',
      age: 24,
    });
  }

  create(createUserDto: CreateUserDto) {
    const newUser: User = {
      ...createUserDto,
      id: randomUUID(),
    };
    this.users.push(newUser);
    return newUser;
  }

  findAll(): Users {
    return { users: this.users };
  }

  findOne(id: string): User {
    return this.users.find((user) => user.id === id);
  }

  update(id: string, updateUserDto: UpdateUserDto): User {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex !== -1) {
      this.users[userIndex] = { ...this.users[userIndex], ...updateUserDto };
      return this.users[userIndex];
    }
    throw new NotFoundException(`User not found by id ${id}`);
  }

  remove(id: string) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex !== -1) {
      return this.users.splice(userIndex)[0];
    }
    throw new NotFoundException(`User not found by id ${id}`);
  }

  queryUsers(
    paginationDtoStream: Observable<PaginationDto>,
  ): Observable<Users> {
    const subject = new Subject<Users>();

    const onNext = (paginationDto: PaginationDto) => {
      const start = paginationDto.page * paginationDto.skip;
      subject.next({
        users: this.users.slice(start, start + paginationDto.skip),
      });
    };

    const onComplete = () => subject.complete;
    paginationDtoStream.subscribe({
      next: onNext,
      complete: onComplete,
    });
    return subject.asObservable();
  }
}
