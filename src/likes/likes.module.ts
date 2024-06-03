import { Module } from '@nestjs/common';
import { LikesController } from './likes.controller';
import { LikesService } from './likes.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LikeEntity } from './entities/like.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule, ConfigModule, TypeOrmModule.forFeature([LikeEntity])],
  controllers: [LikesController],
  providers: [LikesService],
})
export class LikesModule {}
