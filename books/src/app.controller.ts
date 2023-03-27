import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { BooksService } from './books/books.service';
import { BooksDto } from './books/dto/books.dto';
import { RedisService } from './redis/redis.service';
import { Job } from 'bullmq';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly bookService: BooksService,
    private readonly redisService: RedisService,
  ) {}

  @Get()
  getBook() {
    return this.bookService.getBook();
  }

  @Post()
  createBook(@Body() dto: BooksDto, job: Job) {
    return this.redisService.bookHandle(dto, job);
  }
}
