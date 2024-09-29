import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Lead, Prisma } from '@prisma/client';

@Injectable()
export class LeadsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.LeadCreateInput): Promise<Lead> {
    return this.prisma.lead.create({ data });
  }

  async findAll(): Promise<Lead[]> {
    return this.prisma.lead.findMany();
  }

  async findOne(id: number): Promise<Lead | null> {
    return this.prisma.lead.findUnique({ where: { id } });
  }

  async update(id: number, data: Prisma.LeadUpdateInput): Promise<Lead> {
    return this.prisma.lead.update({ where: { id }, data });
  }

  async remove(id: number): Promise<Lead> {
    return this.prisma.lead.delete({ where: { id } });
  }
}
