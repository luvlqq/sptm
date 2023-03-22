import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { BooksModule } from './books/books.module';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaModule } from '../prisma/prisma.module';
import { RedisModule } from 'nestjs-redis';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    BooksModule,
    PrismaModule,
    RedisModule.register({ url: 'redis://localhost:6379' }),
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
