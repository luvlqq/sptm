import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BookDocument = HydratedDocument<Book>;

@Schema()
export class Book {
  @Prop()
  name: string;

  @Prop()
  author: string;

  @Prop()
  genre: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
