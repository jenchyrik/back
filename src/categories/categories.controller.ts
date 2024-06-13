import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Roles } from 'src/decorators/role.decorator';
import { RolesGuard } from 'src/auth/guards/role.guard';

@ApiBearerAuth('token')
@UseGuards(JwtAuthGuard)
@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  @Roles('admin')
  @UseGuards(RolesGuard)
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.createCategory(createCategoryDto);
  }

  @Get()
  findAllCategories() {
    return this.categoriesService.findAllCategories();
  }

  @Get('category/:categoryId')
  findOneCategory(@Param('categoryId') categoryId: string) {
    return this.categoriesService.findOneCategory(+categoryId);
  }

  @Delete('category/:categoryId')
  @Roles('admin')
  @UseGuards(RolesGuard)
  remove(@Param('categoryId') categoryId: string) {
    return this.categoriesService.remove(+categoryId);
  }
}
