import { Injectable } from '@nestjs/common';
import { RedisService } from '../redis/redis.service';
import { BooksDto } from './dto/books.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class BookWorker {
  constructor(
    private readonly redisService: RedisService,
    private readonly prismaService: PrismaService,
  ) {}

  // async listen() {
  //   await this.redisService.subscribe('createBook', async (dto: BooksDto) => {
  //     await this.handleCreateBook(dto);
  //   });
  // }

  async handleCreateBook(dto: BooksDto) {
    const { title, author, genre } = dto;
    await this.prismaService.bookModel.create({
      data: { title, author, genre },
    });
  }
}
