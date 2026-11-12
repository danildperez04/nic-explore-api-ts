import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

enum ServiceType {
  ROOM = 'ROOM',
  TABLE = 'TABLE',
  TICKET = 'TICKET'
}

@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ type: 'decimal' })
  price: number;

  @Column({ type: 'decimal' })
  rating: number;

  @Column({ enum: ServiceType })
  type: ServiceType;
}