import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { RoleModule } from 'src/roles/roles.module';
import { UsersController } from './user.controller';

@Module({
  controllers: [UsersController],
  imports: [TypeOrmModule.forFeature([UserEntity]), RoleModule],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
