import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Project {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 250})
  title_project: string;

  @Column({length: 500})
  description: string;

  @Column({length: 500})
  image: string;

  @Column({length: 250, nullable: true})
  link: string;

  @Column({length: 250})
  techno: string;
}