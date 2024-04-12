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
import { Roles } from 'src/decorators/role.decorator';
import { Role } from 'src/role/role.enum';
import { RolesGuard } from 'src/auth/guards/role.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth('token')
@UseGuards(JwtAuthGuard)
@UseGuards(RolesGuard)
@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  @Roles(Role.Admin)
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.createCategory(createCategoryDto);
  }

  @Get()
  @Roles(Role.User)
  findAllCategories() {
    return this.categoriesService.findAllCategories();
  }

  @Get('category/:categoryId')
  @Roles(Role.User)
  findOneCategory(@Param('categoryId') categoryId: string) {
    return this.categoriesService.findOneCategory(+categoryId);
  }

  @Delete('category/:categoryId')
  @Roles(Role.Admin)
  @UseGuards(JwtAuthGuard) // Добавляем Guard для защиты DELETE эндпоинта
  remove(@Param('categoryId') categoryId: string) {
    return this.categoriesService.remove(+categoryId);
  }
}
