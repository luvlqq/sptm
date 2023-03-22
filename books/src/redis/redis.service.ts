import { Injectable } from '@nestjs/common';
import * as Redis from 'nestjs-redis';

@Injectable()
export class RedisService {
  // constructor(private readonly redisService: RedisService) {}
  //
  // async setValue(key: string, value: string) {
  //   const client = await this.redisService.getClient();
  //   await client.set(key, value);
  // }
  //
  // async getValue(key: string): Promise<string> {
  //   const client = await this.redisService.getClient();
  //   const result = await client.get(key);
  //   return result;
  // }
}
