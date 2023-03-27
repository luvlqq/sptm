import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { BooksModule } from './books/books.module';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaModule } from '../prisma/prisma.module';
import { BooksService } from './books/books.service';
import { RedisModule } from './redis/redis.module';
import { BullModule } from '@nestjs/bullmq';
import { BOOK_QUEUE } from './utils/constants';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    BooksModule,
    PrismaModule,
    RedisModule,
    BullModule.forRoot({
      connection: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: BOOK_QUEUE,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService, BooksService],
})
export class AppModule {}
