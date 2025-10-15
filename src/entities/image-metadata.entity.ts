
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ImageAssociation } from './image-association.entity';

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

  @OneToMany(() => ImageAssociation, (imageAssoc) => imageAssoc.metadata)
  image: ImageAssociation;
}
