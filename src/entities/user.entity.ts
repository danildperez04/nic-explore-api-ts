import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({
    unique: true
  })
  username: string;

  @Column({
    unique: true
  })
  email: string;

  @Column()
  password: string;

  @Column({
    nullable: true
  })
  description: string;

  @Column({
    default: true
  })
  isActive: boolean;

  @Column({
    default: true
  })
  twoFAEnabled: boolean;

  @Column({
    nullable: true
  })
  twoFACode: string;

  @Column({
    nullable: true
  })
  twoFACodeExpiresAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;
}