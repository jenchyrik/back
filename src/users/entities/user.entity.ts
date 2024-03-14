import { CommentEntity } from 'src/comments/entities/comment.entity';
import { LikeEntity } from 'src/likes/entities/like.entity';
import { RoleEntity } from 'src/roles/entities/roles.entity';
import { textEntity } from 'src/texts/entities/text.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('user')
export class userEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  tokens: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @ManyToOne(() => textEntity, (text) => text.user)
  texts: textEntity[];

  @ManyToOne(() => CommentEntity, (comment) => comment.user)
  comments: CommentEntity[];

  @OneToMany(() => LikeEntity, (like) => like.user)
  likes: LikeEntity[];

  @OneToOne(() => RoleEntity)
  @JoinColumn()
  role: RoleEntity;
}
