import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('basket')
export class basketEntity {
  @PrimaryGeneratedColumn()
  product_id: number;

  @Column()
  user_id: number;

  @Column()
  sum: number;

  @Column()
  quanity: number;
}
