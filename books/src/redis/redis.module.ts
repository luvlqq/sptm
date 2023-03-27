import { Module } from '@nestjs/common';
import { RedisService } from './redis.service';
import { RedisController } from './redis.controller';
import { PrismaService } from '../../prisma/prisma.service';
import { BooksService } from '../books/books.service';

@Module({
  imports: [],
  controllers: [RedisController],
  providers: [RedisService, PrismaService, BooksService],
  exports: [RedisService],
})
export class RedisModule {}
