import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Books, BookSchema } from './models/books.module';

@Module({
  providers: [BooksService],
  imports: [
    MongooseModule.forFeature([{ name: Books.name, schema: BookSchema }]),
  ],
  exports: [BooksService, BooksModule],
})
export class BooksModule {}
