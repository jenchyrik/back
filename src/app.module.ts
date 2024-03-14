import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ConfigModule, ConfigService } from '@nestjs/config';

import { getPostgresConfig } from './configs/postgres.config';

import { UsersModule } from './users/users.module';
import { TextsModule } from './texts/texts.module';
import { BasketModule } from './basket/basket.module';
import { AudioModule } from './audio/audio.module';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './categories/categories.module';
import { RolesModule } from './roles/roles.module';
import { PayStatusModule } from './pay-status/pay-status.module';
import { CommentsModule } from './comments/comments.module';
import { LikesModule } from './likes/likes.module';

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
    CommentsModule,
    LikesModule,
    TextsModule,

    BasketModule,
    RolesModule,
    AudioModule,
    CategoryModule,
    RolesModule,
    PayStatusModule,
    CommentsModule,
    LikesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
