import { Module } from '@nestjs/common';
import { BooksService } from './books.service';

@Module({
  providers: [BooksService],
  imports: [],
  exports: [BooksService, BooksModule],
})
export class BooksModule {}
