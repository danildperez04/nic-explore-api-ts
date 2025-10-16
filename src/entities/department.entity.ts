import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ImageAssociation } from './image-association.entity';
import { Place } from './place.entity';

@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({
    type: 'decimal'
  })
  rating: number;

  @Column({
    nullable: true
  })
  imagePath?: string;

  @Column({
    type: 'decimal'
  })
  longitude: number;

  @Column({
    type: 'decimal'
  })
  latitude: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // Relationships
  @OneToMany(() => Place, (place) => place.department)
  places: Place[];

  @OneToMany(() => ImageAssociation, (imageAssoc) => imageAssoc.ownerId, {
    cascade: true,
  })
  images: ImageAssociation[];
}