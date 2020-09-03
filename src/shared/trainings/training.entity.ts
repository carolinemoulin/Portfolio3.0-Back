import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Training {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  graduate: string;

  @Column({type: 'date'})
  date: string;

  @Column({length: 250})
  institution: string;
}