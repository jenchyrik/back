import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { PromoService } from './promo.service';
import { PromoController } from './promo.controller';
import { PromoEntity } from './entities/promo.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule, ConfigModule, TypeOrmModule.forFeature([PromoEntity])],
  controllers: [PromoController],
  providers: [PromoService],
})
export class PromoModule {}
