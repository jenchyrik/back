import { CategoryEntity } from 'src/categories/entities/category.entity';
import { LikeEntity } from 'src/likes/entities/like.entity';
import { userEntity } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('text')
export class textEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  img: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @ManyToOne(() => CategoryEntity, (category) => category.texts)
  category: CategoryEntity;

  @ManyToOne(() => userEntity, (user) => user.texts)
  user: userEntity;

  @OneToMany(() => LikeEntity, (like) => like.text)
  likes: LikeEntity[];
}
