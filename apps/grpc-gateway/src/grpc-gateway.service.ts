import { Injectable } from '@nestjs/common';

@Injectable()
export class GrpcGatewayService {
  getHello(): string {
    return 'Hello World!';
  }
}
