import {
  Column,
  CreateDateColumn,
  Entity,
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
}
