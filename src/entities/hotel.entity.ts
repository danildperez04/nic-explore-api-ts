import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Department } from './department.entity';

@Entity()
export class Hotel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  address: string;

  @Column()
  telephone: string;

  @Column()
  rating: string;

  @Column()
  imagePath: string;

  @Column()
  longitude: string;

  @Column()
  latitude: string;

  // Relationships
  @ManyToOne(() => Department, (department) => department.hotels)
  @JoinColumn()
  department: Department;
}