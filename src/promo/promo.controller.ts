import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Response,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { DeleteResult } from 'typeorm';
import { CreatePromoDto } from './dto/create-promo.dto';
import { UpdatePromoDto } from './dto/update-promo.dto';
import { PromoEntity } from './entities/promo.entity';
import { PromoService } from './promo.service';
import { fileStorage } from './storage';
import { Roles } from 'src/decorators/role.decorator';
import { RolesGuard } from 'src/auth/guards/role.guard';

@ApiTags('promo')
@Controller('promo')
export class PromoController {
  constructor(private readonly promoService: PromoService) {}
  @ApiBearerAuth('token')
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Post()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image', { storage: fileStorage }))
  create(
    @Body() dto: CreatePromoDto,
    @UploadedFile() image: Express.Multer.File,
  ): Promise<PromoEntity> {
    return this.promoService.create(dto, image);
  }

  @Get()
  findAll() {
    return this.promoService.findAll();
  }

  @Get('/image/:path')
  download(@Param('path') path: string, @Response() response) {
    return response.sendFile(path, { root: './db_images/promo' });
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<PromoEntity> {
    return this.promoService.findOne(+id);
  }

  @Patch(':id')
  @ApiBearerAuth('token')
  @Roles('admin')
  @UseGuards(RolesGuard)
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image', { storage: fileStorage }))
  update(
    @Param('id') id: string,
    @Body() dto: UpdatePromoDto,
    @UploadedFile() image: Express.Multer.File,
  ): Promise<PromoEntity> {
    return this.promoService.update(+id, dto, image);
  }

  @Delete(':id')
  @ApiBearerAuth('token')
  @Roles('admin')
  @UseGuards(RolesGuard)
  remove(@Param('id') id: string): Promise<DeleteResult> {
    return this.promoService.delete(+id);
  }
}
