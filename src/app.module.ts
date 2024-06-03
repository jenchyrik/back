import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ConfigModule, ConfigService } from '@nestjs/config';
import { getPostgresConfig } from './configs/postgres.config';
import { PromoModule } from './promo/promo.module';
import { CategoryModule } from './categories/categories.module';
import { ProductModule } from './product/product.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { LikesModule } from './likes/likes.module';
import { CommentsModule } from './comments/comments.module';
import { CommentLikesModule } from './comment_likes/comment_likes.module';
import { AudioModule } from './audio/audio.module';
import { RoleModule } from './roles/roles.module';

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
    PromoModule,
    ProductModule,
    CategoryModule,
    UsersModule,
    AuthModule,
    LikesModule,
    CommentsModule,
    CommentLikesModule,
    AudioModule,
    RoleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
