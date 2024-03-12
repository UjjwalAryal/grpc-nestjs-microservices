import { Injectable } from '@nestjs/common';

@Injectable()
export class GrpcServiceOrdersService {
  getHello(): string {
    return 'Hello World!';
  }
}
