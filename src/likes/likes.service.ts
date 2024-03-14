import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LikeEntity } from './entities/like.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LikesService {
  constructor(
    @InjectRepository(LikeEntity)
    private readonly LikeRepository: Repository<LikeEntity>,
  ) {}
  async findUserLikes(userId: number) {
    return await this.LikeRepository.findBy({ id: userId });
  }
  async findPostLikes(postId: number) {
    return await this.LikeRepository.findBy({ id: postId });
  }
  async createUserLike(userId: number, textId: number) {
    return await this.LikeRepository.save({});
  }
  async removeUserLike(userId: number, textId: number) {
    return await this.LikeRepository.delete({});
  }
}
