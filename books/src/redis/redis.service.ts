import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bullmq';
import { BooksService } from '../books/books.service';
import { BooksDto } from '../books/dto/books.dto';

@Processor('bookQueue')
@Injectable()
export class RedisService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly bookService: BooksService,
  ) {}

  @Process()
  async bookHandle(dto: BooksDto, job: Job) {
    console.log(`Processing job ${job?.id}`);
    await this.bookService.createBook(dto, job);
    console.log(`Job ${job?.id} processed`);
  }
}
