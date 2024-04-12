import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CreateCommentLikeDto } from './dto/create-comment_like.dto';
import { CommentLikesService } from './comment_likes.service';
import { DeleteUserCommentLikeDto } from './dto/delete-comment_like.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { Roles } from 'src/decorators/role.decorator';
import { Role } from 'src/role/role.enum';
import { RolesGuard } from 'src/auth/guards/role.guard';

@ApiBearerAuth('token')
@UseGuards(JwtAuthGuard)
@UseGuards(RolesGuard)
@ApiTags('comment-likes')
@Controller('comment-likes')
export class CommentLikesController {
  constructor(private readonly CommentLikesService: CommentLikesService) {}
  @Post()
  create(@Body() commentLikeDto: CreateCommentLikeDto) {
    return this.CommentLikesService.create(
      +commentLikeDto.user,
      +commentLikeDto.comment,
    );
  }
  @Get('user/:userId')
  getUserCommentLikes(@Param('userId') userId: string) {
    return this.CommentLikesService.findUserCommentLikes(+userId);
  }
  @Delete('delete-like')
  deleteUserCommentLike(
    @Body() deleteUserCommentLike: DeleteUserCommentLikeDto,
  ) {
    return this.CommentLikesService.deleteUserCommentLike(
      +deleteUserCommentLike.user,
      +deleteUserCommentLike.comment,
    );
  }
}
