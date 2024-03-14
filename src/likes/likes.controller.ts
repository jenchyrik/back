import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { LikesService } from './likes.service';

@Controller('likes')
export class LikesController {
  constructor(private readonly LikesService: LikesService) {}
  @Get(':userId')
  findUserLikes(@Param('userId') userId: string) {
    return this.LikesService.findUserLikes(+userId);
  }
  @Get(':postId')
  findPostLikes(@Param('postId') postId: string) {
    return this.LikesService.findPostLikes(+postId);
  }
  @Post([':userId', ':textId'])
  createUserLike(
    @Param('userId') userId: string,
    @Param('textId') textId: string,
  ) {
    return this.LikesService.createUserLike(+userId, +textId);
  }
  @Delete([':userId', ':textId'])
  removeUserLike(
    @Param('userId') userId: string,
    @Param('textId') textId: string,
  ) {
    return this.LikesService.removeUserLike(+userId, +textId);
  }
}
