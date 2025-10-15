import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Hotel } from './hotel.entity';
import { ImageAssociation } from './image-association.entity';

@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  rating: string;

  @Column()
  imagePath: string;

  @Column()
  longitude: string;

  @Column()
  latitude: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // Relationships
  @OneToMany(() => Hotel, (hotel) => hotel.department)
  hotels: Hotel[];

  @OneToMany(() => ImageAssociation, (imageAssoc) => imageAssoc.ownerId, {
    cascade: true,
  })
  images: ImageAssociation[];
}