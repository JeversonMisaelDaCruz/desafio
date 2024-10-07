import { Injectable } from '@nestjs/common';
import { Prisma, Lead } from '@prisma/client'; // Importe os tipos Prisma, incluindo o modelo Lead
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LeadsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.LeadCreateInput): Promise<Lead> {
    console.log('Data recebido no service:', data);
    return this.prisma.lead.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        status: data.status,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
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
