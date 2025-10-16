import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Department } from './department.entity';

@Entity()
export class PlaceType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string; // Ej: "Hotel", "Restaurante", "Zoológico"

  @Column({ nullable: true })
  description?: string;

  // Relación con lugares
  @OneToMany(() => Place, (place) => place.placeType)
  places: Place[];
}

@Entity()
export class Place {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ nullable: true })
  address?: string;

  @Column({ type: 'decimal', precision: 2, scale: 1, nullable: true })
  rating?: number;

  @Column({ nullable: true })
  imagePath?: string;

  @Column({ type: 'decimal', precision: 10, scale: 6, nullable: true })
  longitude?: number;

  @Column({ type: 'decimal', precision: 10, scale: 6, nullable: true })
  latitude?: number;

  // 🔗 Relación con Department
  @ManyToOne(() => Department, (department) => department.places, { onDelete: 'CASCADE' })
  @JoinColumn()
  department: Department;

  // 🔗 Relación con PlaceType
  @ManyToOne(() => PlaceType, (type) => type.places, { onDelete: 'CASCADE' })
  @JoinColumn()
  placeType: PlaceType;
}