import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Job {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  entreprise: string;

  @Column({ nullable: true})
  position: string;

  @Column({ nullable: true})
  logo: string;

  @Column({name: 'missions', length: 500})
  missions: string

  @Column({name: 'startDate', type: 'date'})
  startDate: string;

  @Column({name: 'endDate', type: 'date', nullable: true})
  endDate: string
}