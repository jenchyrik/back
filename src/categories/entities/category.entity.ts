import { textEntity } from 'src/texts/entities/text.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('category')
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => textEntity, (text) => text.category)
  texts: textEntity[];
}
