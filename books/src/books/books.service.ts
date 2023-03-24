import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { BooksDto } from './dto/books.dto';
import { RedisService } from 'nestjs-redis';

@Injectable()
export class BooksService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
  ) {}

  async getBook() {
    return this.prisma.bookModel.findMany();
  }

  async createBook(dto: BooksDto) {
    const { title, author, genre } = dto;
    const foundBook = await this.prisma.bookModel.findUnique({
      where: { title },
    });
    if (foundBook) {
      throw new BadRequestException('Book already exist!');
    }
    await this.redis.getClient();
    await this.prisma.bookModel.create({
      data: { title, author, genre },
    });
    return { message: 'Book has been created' };
  }
}
