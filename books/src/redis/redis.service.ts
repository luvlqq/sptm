import { Injectable } from '@nestjs/common';
import * as Redis from 'redis';
import { promisify } from 'util';

@Injectable()
export class RedisService {
  // private readonly client: Redis.RedisClient;
  //
  // constructor() {
  //   this.client = Redis.createClient();
  // }
  //
  // async subscribe(channel: string, callback: Function) {
  //   const asyncCallback = promisify(callback);
  //   await this.client.subscribe(channel);
  //   this.client.on('message', async (ch, message) => {
  //     if (ch === channel) {
  //       await asyncCallback(JSON.parse(message));
  //     }
  //   });
  // }
  //
  // async publish(channel: string, message: any) {
  //   await this.client.publish(channel, JSON.stringify(message));
  // }
}
