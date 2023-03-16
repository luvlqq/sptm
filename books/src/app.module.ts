import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { BookSchema } from '../schemas/book.schema';
import { BooksEntity } from '../entity/books.entity';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    MongooseModule.forRoot(
      'mongodb+srv://admin:adminadmin@cluster0.z1jmopj.mongodb.net/?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([{ name: BooksEntity.name, schema: BookSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
