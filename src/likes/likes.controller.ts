import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { LikesService } from './likes.service';
import { CreateLikeDto } from './dto/like.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { Roles } from 'src/decorators/role.decorator';
import { Role } from 'src/role/role.enum';
import { RolesGuard } from 'src/auth/guards/role.guard';

@ApiBearerAuth('token')
@UseGuards(JwtAuthGuard)
@UseGuards(RolesGuard)
@ApiTags('product-likes')
@Controller('product-likes')
export class LikesController {
  constructor(private readonly LikesService: LikesService) {}
  @Get('user/:userId')
  findUserLikes(@Param('userId') userId: string) {
    return this.LikesService.findUserLikes(+userId);
  }
  @Post()
  createUserLike(@Body() likeDto: CreateLikeDto) {
    return this.LikesService.createUserLike(+likeDto.user, +likeDto.product);
  }
  @Delete()
  removeUserLike(@Body() likeDto: CreateLikeDto) {
    return this.LikesService.removeUserLike(+likeDto.user, +likeDto.product);
  }
}
