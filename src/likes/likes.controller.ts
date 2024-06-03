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

@ApiBearerAuth('token')
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
