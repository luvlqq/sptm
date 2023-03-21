import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { BooksService } from './books/books.service';
import { BooksDto } from './books/dto/books.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly bookService: BooksService,
  ) {}

  @Get()
  getBook() {
    return this.bookService.getBook();
  }

  @Post()
  createQueueBook(@Body() dto: BooksDto) {
    return this.bookService.createBook(dto);
  }
}
