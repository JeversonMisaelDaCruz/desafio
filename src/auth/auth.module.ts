// src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaModule } from '../prisma/prisma.module'; // Ajuste o caminho para corresponder à estrutura de pastas

@Module({
  imports: [
    ConfigModule.forRoot(), // Importa o ConfigModule e carrega as variáveis de ambiente
    PassportModule,
    PrismaModule, // Verifique se o caminho está correto e o PrismaModule está na pasta 'src'
    JwtModule.registerAsync({
      imports: [ConfigModule], // Importa o ConfigModule no contexto do JwtModule
      inject: [ConfigService], // Injeta o ConfigService para acessar as variáveis de ambiente
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET') || 'default_secret', // Usa a variável de ambiente JWT_SECRET
        signOptions: { expiresIn: '60m' }, // Expiração do token JWT
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, LocalStrategy], // Certifique-se de incluir o JwtStrategy também
  exports: [AuthService],
})
export class AuthModule {}
