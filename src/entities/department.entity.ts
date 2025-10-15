import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Hotel } from './hotel.entity';
import { DepartmentImage } from './departmentImage.entity';

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

  @OneToMany(() => DepartmentImage, (deptImg) => deptImg.department, {
    cascade: true,
  })
  images: DepartmentImage[];
}