import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ConfigModule, ConfigService } from '@nestjs/config';

import { getPostgresConfig } from './configs/postgres.config';

import { UsersModule } from './users/users.module';
import { TextsModule } from './texts/texts.module';
import { BasketModule } from './basket/basket.module';
import { AudioModule } from './audio/audio.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getPostgresConfig,
    }),

    UsersModule,

    TextsModule,

    BasketModule,

    AudioModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
