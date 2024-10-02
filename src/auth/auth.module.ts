// src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'admin', // Defina sua chave secreta aqui
      signOptions: { expiresIn: '60m' },
    }),
    PrismaModule,
  ],
  providers: [AuthService, JwtStrategy, LocalStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
