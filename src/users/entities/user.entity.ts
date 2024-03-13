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

  @OneToMany(() => textEntity, (text) => text.user)
  text: textEntity[];

  @ManyToOne(() => textEntity, (text) => text.userId)
  texts: textEntity[];

  @OneToOne(() => RoleEntity)
  @JoinColumn()
  role: RoleEntity;
}
