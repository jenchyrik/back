import { textEntity } from 'src/texts/entities/text.entity';
import { userEntity } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('comment')
export class CommentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @ManyToOne(() => userEntity, (user) => user.comments)
  user: userEntity;

  @OneToOne(() => textEntity)
  @JoinColumn()
  text: textEntity;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}
