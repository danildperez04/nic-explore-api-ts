import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { Service } from './service.entity';
import { User } from './user.entity';

enum ReservationStatus {
  COMPLETE = 'COMPLETE',
  PENDING = 'PENDING',
  CANCELLED = 'CANCCELLED'
}

//Reservation Service has to store historical price

export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @Column({ enum: ReservationStatus })
  status: ReservationStatus;

  // Many to Many with adittional fields
  services: Service[];
  user: User;
}