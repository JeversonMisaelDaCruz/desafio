import { Module } from '@nestjs/common';
import { LeadsModule } from './leads/leads.module';
import { PrismaService } from 'prisma/prisma.service';
@Module({
  imports: [LeadsModule],
  providers: [PrismaService],
})
export class AppModule {}
