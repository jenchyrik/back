import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseInterceptors,
  UploadedFile,
  Response,
  UseGuards,
} from '@nestjs/common';
import { ApiConsumes, ApiQuery, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { DeleteResult } from 'typeorm';

import { fileStorage } from './storage';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductEntity } from './entities/product.entity';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { Roles } from 'src/decorators/role.decorator';
import { Role } from 'src/role/role.enum';
import { RolesGuard } from 'src/auth/guards/role.guard';

@ApiBearerAuth('token')
@UseGuards(JwtAuthGuard)
@UseGuards(RolesGuard)
@ApiTags('product')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image', { storage: fileStorage }))
  create(
    @Body() dto: CreateProductDto,
    @UploadedFile() image: Express.Multer.File,
  ): Promise<ProductEntity> {
    return this.productService.create(dto, image);
  }

  @Get()
  @ApiQuery({ name: 'categoryId', required: false })
  findAll(@Query('categoryId') categoryId: number): Promise<ProductEntity[]> {
    if (categoryId) return this.productService.findByCategoryId(categoryId);
    else return this.productService.findAll();
  }

  @Get('/image/:path')
  download(@Param('path') path: string, @Response() response) {
    return response.sendFile(path, { root: './db_images/product' });
  }

  @Get('/:id')
  findOne(@Param('id') id: string): Promise<ProductEntity> {
    return this.productService.findOne(+id);
  }

  @Patch(':id')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image', { storage: fileStorage }))
  update(
    @Param('id') id: string,
    @Body() dto: UpdateProductDto,
    @UploadedFile() image: Express.Multer.File,
  ): Promise<ProductEntity> {
    return this.productService.update(+id, dto, image);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<DeleteResult> {
    return this.productService.delete(+id);
  }
}
