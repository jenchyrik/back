import { Module } from '@nestjs/common';
import { TextsService } from './texts.service';
import { TextsController } from './texts.controller';
import { textEntity } from './entities/text.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([textEntity])],
  controllers: [TextsController],
  providers: [TextsService],
})
export class TextsModule {}
