import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { jwtSecret } from '../utils/constants';
import { Response, Request } from 'express';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
  ) {}
  async login(dto: AuthDto, req: Request, res: Response) {
    const { login, password } = dto;
    const findUser = await this.prisma.userModel.findUnique({
      where: { login },
    });
    if (!findUser) {
      throw new BadRequestException('User are not exist');
    }
    const isMatch = await this.comparePasswords({
      password,
      hash: findUser.hashedPassword,
    });
    if (!isMatch) {
      throw new BadRequestException('Incorrect password!');
    }

    const token = await this.signToken({ login: findUser.login });
    if (!token) {
      throw new ForbiddenException('Incorrect session token');
    }

    res.cookie('token', token);

    return res.send({ message: 'login was successfully' });
  }

  async register(dto: AuthDto) {
    const { login, password } = dto;
    const findUser = await this.prisma.userModel.findUnique({
      where: { login },
    });

    if (findUser) {
      throw new BadRequestException('User with this login is already exist!');
    }

    const hashedPassword = await this.hashPassword(password);
    await this.prisma.userModel.create({
      data: {
        login,
        hashedPassword,
      },
    });

    return { message: 'register was successfully' };
  }

  async hashPassword(password: string) {
    const saltOfRounds = 10;
    return await bcrypt.hash(password, saltOfRounds);
  }

  async comparePasswords(args: { password: string; hash: string }) {
    return await bcrypt.compare(args.password, args.hash);
  }

  async signToken(args: { login: string }) {
    const payload = args;
    return this.jwt.signAsync(payload, { secret: jwtSecret });
  }
}
