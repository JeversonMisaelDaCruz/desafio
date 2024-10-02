import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { LeadsService } from './leads.service';
import { Prisma } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('leads')
export class LeadsController {
  constructor(private readonly leadsService: LeadsService) {}
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createLeadDto: Prisma.LeadCreateInput) {
    return this.leadsService.create(createLeadDto);
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.leadsService.findAll();
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.leadsService.findOne(+id);
  }
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLeadDto: Prisma.LeadUpdateInput,
  ) {
    return this.leadsService.update(+id, updateLeadDto);
  }
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.leadsService.remove(+id);
  }
}
