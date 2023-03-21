import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BookDocument, Books } from './models/books.module';
import { Model } from 'mongoose';
import { BooksDto } from './dto/books.dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Books.name) private readonly bookModel: Model<BookDocument>,
  ) {}

  async getBook() {
    return this.bookModel.find();
  }

  async createBook(dto: BooksDto) {
    const newBook = new this.bookModel(dto);
    return newBook.save();
  }
}
