import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from './entities/category.entity';
import { CategoriesController } from './categories.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule, ConfigModule, TypeOrmModule.forFeature([CategoryEntity])],
  providers: [CategoriesService],
  controllers: [CategoriesController],
})
export class CategoryModule {}
