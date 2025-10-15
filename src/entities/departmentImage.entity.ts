import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { Department } from './department.entity';
import { ImageMetaData } from './image-metadata.entity';

@Entity()
export class DepartmentImage {
  @PrimaryGeneratedColumn()
  id: number;

  // Relationships

  @ManyToOne(() => Department, (department) => department.images, {
    onDelete: 'CASCADE',
  })
  department: Department;

  @OneToOne(() => ImageMetaData, { cascade: true, eager: true })
  @JoinColumn()
  meta: ImageMetaData;
}
