
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ImageMetaData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @Column({ nullable: true })
  title?: string;

  @Column({ nullable: true, type: 'text' })
  description?: string;

  @Column({ nullable: true })
  photographer?: string;

  @Column({ nullable: true })
  location?: string;

  @Column({ nullable: true, type: 'timestamp' })
  dateTaken?: Date;
}
