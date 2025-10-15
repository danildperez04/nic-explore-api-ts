import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, Index } from 'typeorm';
import { ImageMetaData } from './image-metadata.entity';

@Entity()
@Index(['ownerType', 'ownerId']) // para búsquedas rápidas
export class ImageAssociation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ownerType: 'hotel' | 'department' | 'post' | 'userProfile'; // tipo de entidad

  // 🔗 Polimorfismo: referencia genérica
  @Column()
  ownerId: number; // ID de la entidad propietaria (hotel.id, user.id, etc.)

  @ManyToOne(() => ImageMetaData, (meta) => meta.image, { cascade: true, eager: true, nullable: true })
  @JoinColumn()
  metadata?: ImageMetaData;
}