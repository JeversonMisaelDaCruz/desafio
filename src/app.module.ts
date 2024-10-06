// src/app.module.ts
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { LeadsModule } from './leads/leads.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [AuthModule, LeadsModule, PrismaModule],
})
export class AppModule {}
