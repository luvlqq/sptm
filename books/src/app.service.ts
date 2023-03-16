import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  findAll() {
    return 'test get';
  }

  createQueueBook() {
    return 'test post';
  }
}
