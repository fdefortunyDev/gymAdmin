import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
  OneToMany,
} from 'typeorm';
import { Gym } from '../../gyms/entities/gyms.entity';

@Entity('users')
@Unique(['email'])
@Unique(['document'])
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'cognito_userId', type: 'varchar', length: 255 })
  cognitoUserId: string;

  @Column({ name: 'first_name', type: 'varchar', length: 20 })
  firstName: string;

  @Column({ name: 'last_name', type: 'varchar', length: 20 })
  lastName: string;

  @Column({ name: 'document', type: 'varchar', length: 8 })
  document: string;

  @Column({ name: 'email', type: 'varchar', length: 150 })
  email: string;

  @Column({ name: 'phone', type: 'varchar', length: 9 })
  phone: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => Gym, (gym) => gym.user, { lazy: true })
  gyms: Gym[];
}