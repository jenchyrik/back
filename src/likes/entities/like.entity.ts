import { textEntity } from 'src/texts/entities/text.entity';
import { userEntity } from 'src/users/entities/user.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('like')
export class LikeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => textEntity, (text) => text.likes)
  text: textEntity;
  @ManyToOne(() => userEntity, (user) => user.likes)
  user: userEntity;
}
