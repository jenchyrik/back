import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('audio')
export class audioEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  audio: string;
}
