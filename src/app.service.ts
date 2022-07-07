import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getProduct(): string {
    return '';
  }

  getHello(): string {
    return 'Hello World!';
  }
}
